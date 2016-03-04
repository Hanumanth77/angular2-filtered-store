import {IModel} from "./IModel";

export class Model implements IModel {

    public getFieldValue(columnName:string):any {
        return this[columnName];
    }
}
