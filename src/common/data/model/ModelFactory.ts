export class ModelFactory {

    private static makeModel<T> (modelClass:{new():T}, config:{}) {
        return Object.assign(new modelClass(), config);
    }

    public static toModels<T> (modelClazz:{new():T}, data:Array<any>):Array<T> {
        let models = [];

        data.forEach((record) => {
            models.push(this.makeModel<T>(modelClazz, record));
        });
        return models;
    }
}
