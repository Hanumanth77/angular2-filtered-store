import {Injectable} from "angular2/core";

import {ArrayStore} from "../../../../common/data/store/ArrayStore";
import {FrameworkModel} from "../../model/FrameworkModel";

@Injectable()
export class FrameworkStore extends ArrayStore<FrameworkModel> {

    constructor() {
        super();
    }
}
