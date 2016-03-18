import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Title} from './services/title';
import {XLarge} from './directives/x-large';
import {FrameworkGrid} from "./view/FrameworkGrid";
import {FrameworkStore} from "./data/store/FrameworkStore";
import {ProxyWriter} from "../../common/data/proxy/writer/ProxyWriter";
import {DataProvider} from "./data/api/DataProvider";
import {ArrayList} from "../../common/data/collection/ArrayList";
import {FrameworkModel} from "./model/FrameworkModel";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title, FrameworkStore
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES,
    XLarge,
    FrameworkGrid
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  // Set our default values
  data = { value: '' };
  // TypeScript public modifiers
  constructor(public title: Title, protected frameworkStore:FrameworkStore, protected dataProvider:DataProvider, protected proxyWriter:ProxyWriter) {

    frameworkStore.setProxyWriter(proxyWriter);

    this.dataProvider.getFrameworks().then((models:Array<FrameworkModel>) => {
      this.frameworkStore.addAll(new ArrayList<FrameworkModel>(models));

      console.debug('[$homeCtrl][load machines]', this.frameworkStore.getSize());

      let machine:FrameworkModel = new FrameworkModel("Angular 2", 0, new Date());
      machine.phantom(true);

      this.frameworkStore.add(machine);

      console.log(this.frameworkStore.getDirtyChanges());

      this.frameworkStore.save();

      setTimeout(() => {
        let machine:FrameworkModel = new FrameworkModel("Angular 3", 0, new Date());
        machine.phantom(true);

        this.frameworkStore.add(machine);

        console.log('ALL SIZE: ', this.frameworkStore.getSize());

        this.frameworkStore.save();
      }, 5000);
    });
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
