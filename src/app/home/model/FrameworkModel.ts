import {Model} from "../../../common/data/model/Model";

export class FrameworkModel extends Model {

    constructor(protected name?:string,
                protected counter?:number,
                protected released?:Date) {
        super();
    }

    public getName():string {
        return this.name;
    }

    public getCounter():number {
        return this.counter;
    }

    public getReleased():Date {
        return this.released;
    }
}
