import {Injectable} from "angular2/core";

import {ICollection} from "../../collection/ICollection";
import {IModel} from "../../model/IModel";
import {IProxyWriter} from "./IProxyWriter";
import {Model} from "../../model/Model";

@Injectable()
export class ProxyWriter implements IProxyWriter<Model> {

    public write(collection:ICollection<Model>):Promise<ICollection<Model>> {
        return new Promise<ICollection<Model>>((resolve) => {
            // TODO server side communication

            setTimeout(function () {
                resolve(collection);
            }, 2000);
        });
    }
}
