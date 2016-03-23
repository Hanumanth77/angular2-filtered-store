import {IProxy} from "./IProxy";
import {IModel} from "../model/IModel";
import {Model} from "../model/Model";

export class ProxyModel implements IProxy<IModel> {

    public read(options?:Object):Promise<IModel> {
        return new Promise<IModel>((resolve) => {
            // TODO server side communication

            setTimeout(function () {
                resolve(new Model());
            }, 2000);
        });
    }

    public write(model:IModel):Promise<IModel> {
        return new Promise<IModel>((resolve) => {
            // TODO server side communication

            model.getDirtyChanges();

            setTimeout(function () {
                resolve(model);
            }, 2000);
        });
    }
}
