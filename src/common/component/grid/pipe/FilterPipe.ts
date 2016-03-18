import {Pipe, PipeTransform} from 'angular2/core';

import {ICollection} from "../../../../data/collection/ICollection";
import {IModel} from "../../../../data/model/IModel";
import {IIterable} from "../../../../data/collection/IIterable";
import {IPredicate} from "../../../../data/predicate/IPredicate";

@Pipe({
    name: 'FilterPipe',
    pure: false         // Force invoke
})
export class FilterPipe implements PipeTransform {

    transform(collection:ICollection<IModel>, args:Array<any>):IIterable<IModel> {
        const filterPredicate:IPredicate<IModel> = args[0];
        return collection.filter(filterPredicate, true);
    }
}
