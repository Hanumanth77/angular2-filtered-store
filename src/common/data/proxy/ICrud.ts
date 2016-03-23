import {IModel} from "../model/IModel";
import {IProxy} from "./IProxy";

export interface ICrud<T> {

    read(options?:Object):Promise<T>;

    save():Promise<T>;

    setProxy(proxy:IProxy<T>);
}
