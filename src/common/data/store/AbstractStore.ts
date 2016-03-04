import {IStore} from "./IStore";
import {IModel} from "../model/IModel";
import {ICollection} from "../collection/ICollection";
import {getSymbolIterator} from "angular2/src/facade/lang";

export abstract class AbstractStore<T extends IModel> implements IStore<T> {

    protected _collection:ICollection<T>;

    constructor(_collection:ICollection<T>) {
        this._collection = _collection;
        this.applySymbolIterator();
    }

    public applySymbolIterator() {
        this[getSymbolIterator()] = this.iterator();
    }

    public add(model:T):IStore<T> {
        this._collection.add(model);
        return this;
    }

    public get(id:any):T {
        return this._collection.get(id);
    }

    public read():Promise<T> {
        throw Error("Unsupported exception");
    }

    public save():Promise<T> {
        throw Error("Unsupported exception");
    }

    public iterator():Function {
        return this._collection.iterator();
    }
}
