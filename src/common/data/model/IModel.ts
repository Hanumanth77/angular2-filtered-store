export interface IModel {

    getFieldValue(columnName:string):any;

    setFieldValue(columnName:string, columnValue:any):IModel;

    isPhantom():boolean;

    isDirty():boolean;

    phantom(phantom:boolean):IModel;

    getDirtyChanges():Object;

    commit();
}
