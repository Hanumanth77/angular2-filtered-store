import {IModel} from "../../../data/model/IModel";
import {IColumn} from "../grid/column/IColumn";
import {IEditable} from "./IEditable";
import {IStore} from "../../../data/store/IStore";

export class Editable implements IEditable {

    private _noModelChanges:Map<IModel, Object> = new Map<IModel, Object>();
    private _noModelFields:Array<string>;

    constructor(_noModelFields?:Array<string>) {
        this._noModelFields = _noModelFields || [];
        this.resetNoModelChanges();
    }

    private toValue(event:Event):string {
        const element = <any> event.srcElement,
            value = null;

        if (element.type) {
            switch (element.type) {
                case "checkbox":
                    return element.checked;
                default:
                    break;
            }
        } else {
            // TODO
        }
        return value;
    }

    public onModifyGroupModel(event:Event, col:IColumn, r) {
        const value = this.toValue(event);
        console.log('XXX: ', value);
    }

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

        const _noModelFieldsAtColumn:Array<string> = this._noModelFields.filter((noModelField:string) => {
            return noModelField === col.getName();
        });

        if (_noModelFieldsAtColumn.length) {
            let dirtyChanges = this._noModelChanges.get(model);
            if (!dirtyChanges) {
                this._noModelChanges.set(model, dirtyChanges = {});
            }
            dirtyChanges[col.getName()] = value;

            console.debug('[$editable]', this._noModelChanges);
        } else {
            model.setFieldValue(col.getName(), value);
        }
    }

    public resetNoModelChanges() {
        this._noModelChanges.clear();
    }

    public getNoModelChanges():Map<IModel, Object> {
        return this._noModelChanges;
    }
}
