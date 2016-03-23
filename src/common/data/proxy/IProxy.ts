export interface IProxy<T> {

    write(data:T): Promise<T>;

    read(options?:Object): Promise<T>;
}
