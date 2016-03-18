import {Component, Input, OnInit} from 'angular2/core';

import {IColumn} from './column/IColumn';
import {GridComponent} from "./GridComponent";
import {IEditable} from "../editable/IEditable";
import {IModel} from "../../data/model/IModel";
import {ICollection} from "../../data/collection/ICollection";
import {IStore} from "../../data/store/IStore";
import {IPredicate} from "../../data/predicate/IPredicate";
import {AlwaysTruePredicate} from "../../data/predicate/AlwaysTruePredicate";

@Component(new GridComponent([]))
export class Grid<T extends IModel, E extends IColumn> implements IEditable, OnInit {

    protected columns:ICollection<E>;
    protected store:IStore<T>;
    protected editable:IEditable;
    protected filterPredicate:IPredicate<T> = new AlwaysTruePredicate<T>();

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

    public onModifyModel(event:Event, col:IColumn, model:IModel) {
        this.editable.onModifyModel(event, col, model);
    }

    public onClick(event:Event, col:IColumn, model:IModel) {
        // TODO
    }

    public onRowClick(event:Event, model:IModel) {
    }

    public ngOnInit() {
    }
}
