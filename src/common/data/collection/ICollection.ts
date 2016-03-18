import {IIterable} from "../collection/IIterable";
import {IPredicate} from "../predicate/IPredicate";

export interface ICollection<T> extends IIterable<T> {

    add(model:T):ICollection<T>;

    addAll(models:ICollection<T>):ICollection<T>;

    get(id:any):T;

    removeAll():ICollection<T>;

    filter(predicate:IPredicate<T>, newCollection?:boolean):IIterable<T>;

    iterate(callback:(model:T) => void, predicate?:IPredicate<T>);

    clearFilter();

    getSize():number;

    newInstance():ICollection<T>;
}
