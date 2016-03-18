import {ICollection} from "../../collection/ICollection";
import {IModel} from "../../model/IModel";

export interface IProxyWriter<T extends IModel> {

    write(collection:ICollection<T>): Promise<ICollection<T>>;
}
