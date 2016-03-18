import {ICollection} from "./ICollection";
import {ArrayIterator} from "./ArrayIterator";
import {Collection} from "./Collection";
import {IPredicate} from "../predicate/IPredicate";

export class ArrayList<T> extends Collection<T> {

    constructor(_collection?:Array<T>) {
        super(_collection || []);
    }

    public add(model:T):ICollection<T> {
        this.getOriginalCollection().push(model);
        return this;
    }

    public get(id:number):T {
        return this.getFilteredCollection()[id];
    }

    public getSize():number {
        return this.getFilteredCollection().length;
    }

    public removeAll():ICollection<T> {
        this.getFilteredCollection().length = 0;
        return this;
    }

    public getIteratorInstance():Iterator<T> {
        return new ArrayIterator<T>(this.getFilteredCollection());
    }

    public newInstance():Collection<T> {
        return new ArrayList<T>();
    }

    public applyFilter(_collection, predicate:IPredicate<T>) {
        return _collection.filter((o) => {
            return predicate.apply(o);
        });
    }
}
