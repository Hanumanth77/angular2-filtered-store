import {IModel} from "../model/IModel";
import {ICollection} from "../collection/ICollection";
import {ICrud} from "../proxy/ICrud";

export interface IStore<T extends IModel> extends ICollection<T>, ICrud<ICollection<T>> {

    getDirtyChanges():ICollection<T>;

    add(model:T):IStore<T>;

    addAll(models:ICollection<T>):IStore<T>;

    newInstance():IStore<T>;
}
