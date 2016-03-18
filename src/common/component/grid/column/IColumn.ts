import {IModel} from "../../../../data/model/IModel";

export interface IColumn {

    getModelValue(model:IModel):string;

    getDescription():string;

    getName():string;

    setName(name:string):IColumn;

    setDescription(description:string):IColumn;

    getColumnType():string;
}
