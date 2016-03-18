import {AbstractStore} from "./AbstractStore";
import {ArrayList} from "../collection/ArrayList";
import {IModel} from "../model/IModel";
import {IStore} from "./IStore";

export class ArrayStore<T extends IModel> extends AbstractStore<T> {

    constructor() {
        super(new ArrayList<T>());
    }

    public newInstance():IStore<T> {
        return new ArrayStore<T>();
    }
}
