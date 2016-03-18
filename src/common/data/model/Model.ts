import {IModel} from "./IModel";

export class Model implements IModel {

    protected _phantom:boolean = false;

    public setFieldValue(columnName:string, columnValue:any):IModel {
        this[columnName] = columnValue;
        return this;
    }

    public getFieldValue(columnName:string):any {
        return this[columnName];
    }

    public isPhantom():boolean {
        return this._phantom;
    }

    public phantom(phantom:boolean):IModel {
        this._phantom = phantom;
        return this;
    }
}
