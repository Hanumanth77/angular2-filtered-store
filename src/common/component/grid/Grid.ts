import {Component, Input, OnInit} from 'angular2/core';

import {IColumn} from './column/IColumn';
import {IterableDiffers} from "angular2/core";
import {IStore} from "../../../data/store/IStore";
import {IModel} from "../../../data/model/IModel";
import {ICollection} from "../../../data/collection/ICollection";
import {GridComponent} from "./GridComponent";

@Component(new GridComponent())
export class Grid<T extends IModel, E extends IColumn> implements OnInit {

    protected columns:ICollection<E>;
    protected store:IStore<T>;

    @Input()
    protected name:string;

    public setColumns(columns:ICollection<E>):Grid<T, E> {
        this.columns = columns;
        return this;
    }

    public setStore(store:IStore<T>):Grid<T, E> {
        this.store = store;
        return this;
    }

    public ngOnInit() {
    }
}
