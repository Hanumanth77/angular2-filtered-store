import {getSymbolIterator} from "angular2/src/facade/lang";

import {ICollection} from "./ICollection";
import {IIteratorFactory} from "./IIteratorFactory";
import {IIterable} from "./IIterable";
import {IPredicate} from "../predicate/IPredicate";

export abstract class Collection<T> implements ICollection<T>, IIteratorFactory<T> {

    protected _originalCollection;
    protected _collection;

    constructor(_collection) {
        this._collection = this._originalCollection = _collection;
        this.applySymbolIterator();
    }

    public iterator():()=>Iterator<T> {
        return () => {
            return this.getIteratorInstance();
        };
    }

    public applySymbolIterator() {
        this[getSymbolIterator()] = this.iterator();
    }

    public iterate(callback:(model:T) => void, predicate?:IPredicate<T>) {
        let iterator:Iterator<T> = this.iterator()(),
            iteratorResult:IteratorResult<T>;

        while (!((iteratorResult = iterator.next()).done)) {
            if (!predicate || (predicate && predicate.apply(iteratorResult.value))) {
                callback.call(this, iteratorResult.value);
            }
        }
    }

    public addAll(models:ICollection<T>):ICollection<T> {
        models.iterate((model:T) => {
            this.add(model);
        });
        return this;
    }

    public filter(predicate:IPredicate<T>, newCollection?:boolean):IIterable<T> {
        const result = this.applyFilter(this.getOriginalCollection(), predicate);

        return !!newCollection
            ? result
            : (this._collection = result);
    }

    public clearFilter() {
        this._collection = this._originalCollection;
    }

    protected getFilteredCollection():Array<T> {
        return this._collection;
    }

    protected getOriginalCollection():Array<T> {
        return this._originalCollection;
    }

    abstract newInstance():ICollection<T>;

    abstract add(model:T):ICollection<T>;

    abstract get(id:any):T;

    abstract getSize():number;

    abstract removeAll():ICollection<T>;

    abstract getIteratorInstance():Iterator<T>;

    abstract applyFilter(_collection, predicate:IPredicate<T>);
}
