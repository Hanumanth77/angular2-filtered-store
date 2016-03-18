import {IModel} from "../model/IModel";
import {ICollection} from "../collection/ICollection";
import {IProxyWriter} from "../proxy/writer/IProxyWriter";

export interface IStore<T extends IModel> extends ICollection<T> {

    read():Promise<T>;

    save():Promise<ICollection<T>>;

    getDirtyChanges():ICollection<T>;

    add(model:T):IStore<T>;

    addAll(models:ICollection<T>):IStore<T>;

    newInstance():IStore<T>;

    setProxyWriter(proxyWriter:IProxyWriter<T>):IStore<T>;
}
