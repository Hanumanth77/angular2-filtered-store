import {IRenderer} from "./IRenderer";

export class DefaultRenderer implements IRenderer {

    public renderer(value:any):string {
        return value ? value.toString() : '';
    }
}
