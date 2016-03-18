import {Editable} from "../editable/Editable";
import {FilterPipe} from "./pipe/FilterPipe";

export class GridComponent {

    selector:string = 'grid';
    templateUrl:string = './common/components/angular/grid/grid.html';
    pipes = [FilterPipe];

    constructor(public providers:Array<any>) {
        this.providers = [Editable].concat(providers);
    }
}
