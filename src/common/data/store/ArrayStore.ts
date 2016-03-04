import {AbstractStore} from "./AbstractStore";
import {ArrayList} from "../collection/ArrayList";
import {IModel} from "../model/IModel";

export class ArrayStore<T extends IModel> extends AbstractStore<T> {

    constructor() {
        super(new ArrayList<T>());
    }
}
