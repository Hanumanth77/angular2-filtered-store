import {Column} from "./Column";
import {DateRenderer} from "../renderer/DateRenderer";

export class DateColumn extends Column {

    constructor() {
        super(new DateRenderer());
    }
}
