import {IColumn} from "../grid/column/IColumn";
import {IModel} from "../../data/model/IModel";

export interface IEditable {

    onModifyModel(event:Event, col:IColumn, model:IModel);
}
