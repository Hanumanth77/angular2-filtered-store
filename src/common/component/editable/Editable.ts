import {Injectable} from "angular2/core";

import {IColumn} from "../grid/column/IColumn";
import {IEditable} from "./IEditable";
import {IModel} from "../../data/model/IModel";

@Injectable()
export class Editable implements IEditable {

    public onModifyModel(event:Event, col:IColumn, model:IModel) {
        let element = <any> event.srcElement,
            value;

        if (element.type) {
            switch (element.type) {
                case "checkbox":
                    value = element.checked;
                    break;
                default:
                    break;
            }
        } else {
            // TODO
        }

        model.setFieldValue(col.getName(), value);
    }
}
