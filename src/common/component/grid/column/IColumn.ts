import {IModel} from "../../../data/model/IModel";

export interface IColumn {

    getModelValue(model:IModel):string;
}
