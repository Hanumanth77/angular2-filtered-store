import {Component, View, OnInit} from 'angular2/core';

import {Grid} from '../../../common/component/grid/Grid';
import {IColumn} from '../../../common/component/grid/column/IColumn';
import {FrameworkModel} from '../model/FrameworkModel';
import {DateColumn} from "../../../common/component/grid/column/DateColumn";
import {Column} from "../../../common/component/grid/column/Column";
import {ArrayStore} from "../../../common/data/store/ArrayStore";
import {ICollection} from "../../../common/data/collection/ICollection";
import {ArrayList} from "../../../common/data/collection/ArrayList";
import {Editable} from "../../../common/component/editable/Editable";

export class DefaultFrameworkGrid<S extends ArrayStore<FrameworkModel>> extends Grid<FrameworkModel, IColumn> {

    constructor(protected store:S, protected editable:Editable) {
        super();
        this.setColumns(this.makeColumns());
    }

    private makeColumns():ICollection<IColumn> {
        return new ArrayList<IColumn>()
            .add(new Column().setName("name"))
            .add(new Column().setName("counter"))
            .add(new DateColumn().setName("released"))
            .add(new Column().setName("_phantom").setDescription("phantom"));
    }
}
