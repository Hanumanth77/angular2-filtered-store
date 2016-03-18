export interface IIterable<T> {

    iterator(): ()=>Iterator<T>;

    applySymbolIterator();
}
