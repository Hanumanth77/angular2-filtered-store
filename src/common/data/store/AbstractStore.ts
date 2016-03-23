import {getSymbolIterator} from "angular2/src/facade/lang";

import {IStore} from "./IStore";
import {IModel} from "../model/IModel";
import {ICollection} from "../collection/ICollection";
import {IIterable} from "../collection/IIterable";
import {IPredicate} from "../predicate/IPredicate";
import {PhantomPredicate} from "../predicate/PhantomPredicate";
import {DirtyPredicate} from "../predicate/DirtyPredicate";
import {Predicates} from "../predicate/Predicates";
import {IProxy} from "../proxy/IProxy";

const PHANTOM_PREDICATE = new PhantomPredicate(),
    DIRTY_PREDICATE = new DirtyPredicate();

export abstract class AbstractStore<T extends IModel> implements IStore<T> {

    protected _collection:ICollection<T>;
    protected _proxy:IProxy<ICollection<T>>;

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

    public read(options?:Object):Promise<ICollection<T>> {
        return this._proxy.read(options);
    }

    public save():Promise<ICollection<T>> {
        let promise:Promise<ICollection<T>> = this._proxy.write(this.getDirtyChanges());
        promise.then((collection:ICollection<T>) => {
            collection.iterate((model:T) => {
                model.commit();
            });
        });
        return promise;
    }

    public getDirtyChanges():ICollection<T> {
        let collectionOfDirtyChanges:ICollection<T> = this._collection.newInstance();

        this.iterate((model:T) => {
            collectionOfDirtyChanges.add(model);
        }, Predicates.or(PHANTOM_PREDICATE, DIRTY_PREDICATE));

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

    public setProxy(proxy:IProxy<ICollection<T>>) {
        this._proxy = proxy;
    }

    public abstract newInstance():IStore<T>;
}
