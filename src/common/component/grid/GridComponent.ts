import {FilterPipe} from "./pipe/FilterPipe";

export class GridComponent {

    selector:string = 'grid';
    template:string = require('./grid.html');
    pipes = [FilterPipe];

    constructor(public providers:Array<any>) {
        this.providers = [].concat(providers);
    }
}
