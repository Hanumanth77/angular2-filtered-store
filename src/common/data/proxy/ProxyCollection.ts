import {IProxy} from "./IProxy";
import {ICollection} from "../collection/ICollection";
import {IModel} from "../model/IModel";
import {Model} from "../model/Model";
import {ArrayList} from "../collection/ArrayList";

export class ProxyCollection implements IProxy<ICollection<IModel>> {

    public read(options?:Object):Promise<ICollection<IModel>> {
        return new Promise<ICollection<IModel>>((resolve) => {
            // TODO server side communication

            setTimeout(function () {
                resolve(new ArrayList<IModel>());
            }, 2000);
        });
    }

    public write(collection:ICollection<IModel>):Promise<ICollection<IModel>> {
        return new Promise<ICollection<IModel>>((resolve) => {
            // TODO server side communication

            setTimeout(function () {
                resolve(collection);
            }, 2000);
        });
    }
}
