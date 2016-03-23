import {IModel} from "./IModel";
import {ICollection} from "../collection/ICollection";
import {ICrud} from "../proxy/ICrud";
import {IProxy} from "../proxy/IProxy";

export class Model implements IModel, ICrud<IModel> {

    private _phantom:boolean = false;

    protected _proxy:IProxy<IModel>;
    protected _modifiable:Object;

    constructor() {
        this.commit();
    }

    public setFieldValue(columnName:string, columnValue:any):IModel {
        this._modifiable[columnName] = columnValue;
        return this;
    }

    public getFieldValue(columnName:string):any {
        return typeof this._modifiable[columnName] === 'undefined'
            ? this[columnName]
            : this._modifiable[columnName];
    }

    public isPhantom():boolean {
        return this._phantom;
    }

    public phantom(phantom:boolean):IModel {
        this._phantom = phantom;
        return this;
    }

    public isDirty():boolean {
        return Object.keys(this._modifiable).length > 0;
    }

    public getDirtyChanges():Object {
        return this._modifiable;
    }

    public read(options?:Object):Promise<IModel> {
        throw this._proxy.read(options);
    }

    public save():Promise<IModel> {
        let promise = this._proxy.write(this);

        promise.then(() => {
            this.commit();
        });
        return promise;
    }

    public setProxy(proxy:IProxy<IModel>) {
        this._proxy = proxy;
    }

    public commit() {
        this._modifiable = {};
        this.phantom(false);
    }
}
