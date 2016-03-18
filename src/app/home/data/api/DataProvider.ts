import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

import {IDataProvider} from "./IDataProvider";
import {FrameworkModel} from "../../model/FrameworkModel";
import {ModelFactory} from "../../../../common/data/model/ModelFactory";
import {JsonReader} from "../../../../common/data/reader/JsonReader";

@Injectable()
export class DataProvider implements IDataProvider {

    constructor(protected http:Http) {
    }

    public read(path:string):Promise<Array<any>> {
        // TODO
        let data = '[]';
        switch (path) {
            case 'machines':
                data = '[{"name": "Angular", "counter": 0},{"name": "ExtJS", "counter": 0},{"name": "React", "counter": 0}]';
                break;
        }

        return new Promise<Array<any>>((resolve, reject) => {
            // TODO http.call
            setTimeout(() => {
                resolve(
                    new JsonReader().read(data)
                );
            }, 2000);
        });
    }

    public getFrameworks():Promise<Array<FrameworkModel>> {
        return new Promise<Array<FrameworkModel>>((resolve) => {

            this.read('machines').then((data:Array<any>) => {
                resolve(ModelFactory.toModels<FrameworkModel>(FrameworkModel, data));
            });
        });
    }
}
