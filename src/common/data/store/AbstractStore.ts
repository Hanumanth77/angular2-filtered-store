import {getSymbolIterator} from "angular2/src/facade/lang";

import {IStore} from "./IStore";
import {IModel} from "../model/IModel";
import {ICollection} from "../collection/ICollection";
import {IProxyWriter} from "../proxy/writer/IProxyWriter";
import {IIterable} from "../collection/IIterable";
import {IPredicate} from "../predicate/IPredicate";
import {PhantomPredicate} from "../predicate/PhantomPredicate";

const PHANTOM_PREDICATE = new PhantomPredicate();

export abstract class AbstractStore<T extends IModel> implements IStore<T> {

    protected _collection:ICollection<T>;
    protected _proxyWriter:IProxyWriter<T>;

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

    public addAll(models:ICollection<T>):IStore<T> {
        this._collection.addAll(models);
        return this;
    }

    public get(id:any):T {
        return this._collection.get(id);
    }

    public getSize():number {
        return this._collection.getSize();
    }

    public read():Promise<T> {
        throw Error("Unsupported exception");
    }

    public save():Promise<ICollection<T>> {
        let promise:Promise<ICollection<T>> = this._proxyWriter.write(this.getDirtyChanges());
        promise.then(function (collection:ICollection<T>) {
            collection.iterate(function (model:T) {
                model.phantom(false);
            });
        });
        return promise;
    }

    public getDirtyChanges():ICollection<T> {
        let collectionOfDirtyChanges:ICollection<T> = this._collection.newInstance();

        this.iterate((model:T) => {
            collectionOfDirtyChanges.add(model);
        }, PHANTOM_PREDICATE);

        return collectionOfDirtyChanges;
    }

    public iterate(callback:(model:T) => void, predicate?:IPredicate<T>) {
        this._collection.iterate(callback, predicate);
    }

    public iterator():()=>Iterator<T> {
        return this._collection.iterator();
    }

    public removeAll():IStore<T> {
        this._collection.removeAll();
        return this;
    }

    public filter(predicate:IPredicate<T>, newCollection?:boolean):IIterable<T> {
        return this._collection.filter(predicate, newCollection);
    }

    public clearFilter() {
        this._collection.clearFilter();
    }

    public setProxyWriter(proxyWriter:IProxyWriter<T>):IStore<T> {
        this._proxyWriter = proxyWriter;
        return this;
    }

    public abstract newInstance():IStore<T>;
}
