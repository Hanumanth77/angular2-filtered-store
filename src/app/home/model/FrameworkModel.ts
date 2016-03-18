import {Model} from "../../../common/data/model/Model";

export class FrameworkModel extends Model {

    constructor(protected name?:string,
                protected released?:Date) {
        super();
        this.released = this.released || new Date('1999/01/01');
    }

    public getName():string {
        return this.name;
    }

    public getReleased():Date {
        return this.released;
    }
}
