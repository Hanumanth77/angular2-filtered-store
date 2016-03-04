import {DefaultRenderer} from "./DefaultRenderer";
import {DatePipe} from 'angular2/common';

export class DateRenderer extends DefaultRenderer {

    private static DEFAULT_PATTERN = "ddMMyyyy";
    private datePipe = new DatePipe();

    private pattern:string;

    constructor(pattern?:string) {
        super();
        this.pattern = pattern || DateRenderer.DEFAULT_PATTERN;
    }

    public renderer(value:any):string {
        if (!value) {
            return super.renderer(value);
        }
        return value instanceof Date ? this.datePipe.transform(value, [this.pattern]) : value;
    }
}
