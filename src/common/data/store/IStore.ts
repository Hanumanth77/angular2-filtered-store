import {IModel} from "../model/IModel";
import {Iterable} from "../collection/Iterable";
import {ICollection} from "../collection/ICollection";

export interface IStore<T extends IModel> extends ICollection<T> {

    read():Promise<T>;

    save():Promise<T>;

    add(model:T):IStore<T>
}
