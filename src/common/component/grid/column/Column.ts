import {IComponent} from "../../component/IComponent";
import {IColumn} from "./IColumn";
import {IRenderer} from "../renderer/IRenderer";
import {DefaultRenderer} from "../renderer/DefaultRenderer";
import {IModel} from "../../../data/model/IModel";

export class Column implements IColumn, IComponent {

    protected name:string;
    protected description:string;
    protected renderer:IRenderer;

    constructor(renderer?:IRenderer) {
        this.renderer = renderer || new DefaultRenderer();
    }

    public getColumnType():string {
        return "default";
    }

    public setName(name:string):IColumn {
        this.name = name;
        return this;
    }

    public setDescription(description:string):IColumn {
        this.description = description;
        return this;
    }

    public getName():string {
        return this.name;
    }

    public getDescription():string {
        return this.description;
    }

    public show():void {
        throw Error("Unsupported exception");
    }

    public hide():void {
        throw Error("Unsupported exception");
    }

    public getModelValue(model:IModel):string {
        return this.renderer.renderer(
            model.getFieldValue(this.getName())
        );
    }
}
