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
import {FrameworkFilteredGrid} from "./view/FrameworkFilteredGrid";
import {IModel} from "../../common/data/model/IModel";

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
    FrameworkGrid,
    FrameworkFilteredGrid
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
  data = {value: ''};

  constructor(protected frameworkStore:FrameworkStore, protected dataProvider:DataProvider, protected proxyWriter:ProxyWriter) {

    frameworkStore.setProxyWriter(proxyWriter);

    this.dataProvider.getFrameworks().then((models:Array<FrameworkModel>) => {

      this.frameworkStore.addAll(new ArrayList<FrameworkModel>(models));
      this.makeModel("Angular 2");

      setTimeout(() => {
        this.makeModel("ExtJS6");
      }, 4000);
    });
  }

  private makeModel(frameworkName) {
    let framework:FrameworkModel = new FrameworkModel(frameworkName, new Date());
    framework.phantom(true);

    this.frameworkStore.add(framework);
    this.frameworkStore.save();
  }

  ngOnInit() {
    console.log('hello `Home` component');
  }
}
