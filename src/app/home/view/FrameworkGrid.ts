import {Component} from 'angular2/core';

import {FrameworkGridComponent} from "./FrameworkGridComponent";
import {DefaultFrameworkGrid} from "./DefaultFrameworkGrid";
import {FrameworkStore} from "../data/store/FrameworkStore";
import {Editable} from "../../../common/component/editable/Editable";

@Component(new FrameworkGridComponent())
export class FrameworkGrid extends DefaultFrameworkGrid<FrameworkStore> {

    protected storeSize:boolean = true;

    constructor(protected store:FrameworkStore, protected editable:Editable) {
        super(store, editable);
    }
}
