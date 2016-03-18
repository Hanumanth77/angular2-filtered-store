import {Injectable} from "angular2/core";

import {IModel} from "../model/IModel";
import {IPredicate} from "./IPredicate";

export class PhantomPredicate implements IPredicate<IModel> {

    public apply(o:IModel):boolean {
        return o.isPhantom();
    }
}
