import {Column} from "./Column";

export class CheckboxColumn extends Column {

    constructor() {
        super();
    }

    public getColumnType():string {
        return "checkbox";
    }
}
