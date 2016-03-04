import {ICollection} from "./ICollection";
import {getSymbolIterator} from "angular2/src/facade/lang";
import {IIteratorFactory} from "./IIteratorFactory";

export abstract class Collection<T> implements ICollection<T>, IIteratorFactory<T> {

    constructor() {
        this.applySymbolIterator();
    }

    public iterator():Function {
        return () => {
            return this.getIteratorInstance();
        };
    }

    public applySymbolIterator() {
        this[getSymbolIterator()] = this.iterator();
    }

    abstract getIteratorInstance():Iterator<T>;

    abstract add(model:T):ICollection<T>;

    abstract get(id:any):T;

    abstract removeAll():ICollection<T>;
}
