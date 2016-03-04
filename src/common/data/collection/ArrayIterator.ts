import {IteratorResultImpl} from "./IteratorResultImpl";

export class ArrayIterator<T> implements Iterator<T> {

    protected _collection:Array<T>;
    protected _index = 0;

    constructor(_collection:Array<T>) {
        this._collection = _collection;
    }

    public next():IteratorResult<T> {
        let currentIndex = this._index;

        return new IteratorResultImpl<T>(
            ++this._index > this._collection.length,
            this._collection[currentIndex]
        );
    }
}
