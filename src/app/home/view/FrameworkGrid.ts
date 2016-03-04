import {Component, View, OnInit} from 'angular2/core';

import {Grid} from '../../../common/component/grid/Grid';
import {IColumn} from '../../../common/component/grid/column/IColumn';
import {FrameworkModel} from '../model/FrameworkModel';
import {DateColumn} from "../../../common/component/grid/column/DateColumn";
import {Column} from "../../../common/component/grid/column/Column";
import {IStore} from "../../../common/data/store/IStore";
import {ArrayStore} from "../../../common/data/store/ArrayStore";
import {ICollection} from "../../../common/data/collection/ICollection";
import {ArrayList} from "../../../common/data/collection/ArrayList";
import {FrameworkGridComponent} from "./FrameworkGridComponent";

@Component(new FrameworkGridComponent())
export class FrameworkGrid extends Grid<FrameworkModel, IColumn> {

    constructor() {
        super();
        this.setColumns(this.getColumns())
            .setStore(this.getProductsKeysStore())
    }

    private getProductsKeysStore():IStore<FrameworkModel> {
        return new ArrayStore<FrameworkModel>()
            .add(new FrameworkModel("Angular 1", "AngularJS (commonly referred to as Angular or Angular.js is an open-source web application framework mainly maintained by Google", new Date('2009/01/01')))
            .add(new FrameworkModel("Angular 2", "AngularJS (commonly referred to as Angular or Angular.js is an open-source web application framework mainly maintained by Google", new Date('2015/01/01')));
    }

    private getColumns():ICollection<IColumn> {
        return new ArrayList<IColumn>()
            .add(new Column().setName("name"))
            .add(new Column().setName("description"))
            .add(new DateColumn().setName("released"));
    }
}
