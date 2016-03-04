import {ICollection} from "./ICollection";
import {ArrayIterator} from "./ArrayIterator";
import {Collection} from "./Collection";

export class ArrayList<T> extends Collection<T> {

    protected _collection:Array<T>;

    constructor() {
        super();
        this._collection = [];
    }

    public add(model:T):ICollection<T> {
        this._collection.push(model);
        return this;
    }

    public get(id:number):T {
        return this._collection[id];
    }

    public removeAll():ICollection<T> {
        this._collection = [];
        return this;
    }

    public getIteratorInstance():Iterator<T> {
        return new ArrayIterator<T>(this._collection);
    }
}
