import {IModel} from "../model/IModel";
import {IPredicate} from "./IPredicate";

export class DirtyPredicate implements IPredicate<IModel> {

    public apply(o:IModel):boolean {
        return o.isDirty();
    }
}
