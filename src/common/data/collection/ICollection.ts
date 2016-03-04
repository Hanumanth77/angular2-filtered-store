import {Iterable} from "../collection/Iterable";

export interface ICollection<T> extends Iterable<T> {

    add(model:T):ICollection<T>

    get(id:any):T;
}
