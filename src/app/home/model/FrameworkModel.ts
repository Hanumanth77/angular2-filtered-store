import {Model} from "../../../common/data/model/Model";

export class FrameworkModel extends Model {

    constructor(public name:string,
                public counter:number,
                public released:Date) {
        super();
    }
}
