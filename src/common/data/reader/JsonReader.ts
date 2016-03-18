import {IDataReader} from "./IDataReader";

export class JsonReader implements IDataReader {

    public read(rawData:string):any {
        return JSON.parse(rawData);
    }
}
