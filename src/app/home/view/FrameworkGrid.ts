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
            .setStore(this.getFrameworksStore())
    }

    private getFrameworksStore():IStore<FrameworkModel> {
        let firstBean = new FrameworkModel("Angular1", 1, new Date('2009/01/01')),
            secondBean = new FrameworkModel("Angular2", 1, new Date('2015/01/01'));

        let store:IStore<FrameworkModel> = new ArrayStore<FrameworkModel>()
            .add(firstBean)
            .add(secondBean);

        setInterval(function () {
            firstBean.counter = firstBean.counter + 1;
            secondBean.counter = secondBean.counter * 2;
        }, 1000);

        return store;
    }

    private getColumns():ICollection<IColumn> {
        return new ArrayList<IColumn>()
            .add(new Column().setName("name"))
            .add(new Column().setName("counter"))
            .add(new DateColumn().setName("released"));
    }
}
