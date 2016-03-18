export interface IModel {

    getFieldValue(columnName:string):any;

    setFieldValue(columnName:string, columnValue:any):IModel;

    isPhantom():boolean;

    phantom(phantom:boolean):IModel;
}
