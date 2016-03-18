import {Component} from 'angular2/core';

import {DefaultFrameworkGrid} from "./DefaultFrameworkGrid";
import {FrameworkFilteredGridComponent} from "./FrameworkFilteredGridComponent";
import {IPredicate} from "../../../common/data/predicate/IPredicate";
import {Editable} from "../../../common/component/editable/Editable";
import {FrameworkStore} from "../data/store/FrameworkStore";
import {FrameworkModel} from "../model/FrameworkModel";

class FrameworkFilteredPredicate implements IPredicate<FrameworkModel> {

    public apply(machine:FrameworkModel):boolean {
        return machine.getName().indexOf('Ext') > -1;
    }
}

const FRAMEWORK_FILTERED_PREDICATE:IPredicate<FrameworkModel> = new FrameworkFilteredPredicate();

@Component(new FrameworkFilteredGridComponent())
export class FrameworkFilteredGrid extends DefaultFrameworkGrid<FrameworkStore> {

    protected filterPredicate:IPredicate<FrameworkModel> = FRAMEWORK_FILTERED_PREDICATE;

    constructor(protected store:FrameworkStore, protected editable:Editable) {
        super(store, editable);
    }
}
