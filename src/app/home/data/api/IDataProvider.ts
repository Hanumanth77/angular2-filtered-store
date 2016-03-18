export interface IDataProvider {

    getFrameworks<T>(): Promise<T>;
}
