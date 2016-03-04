# Angular2 Iterator preview

This is a fork from [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter) project.

### How to start

1. npm install
2. npm start
3. http://localhost:3000

### Usage example

##### Business logic
```
class FrameworkGrid extends Grid<FrameworkModel, IColumn> {

    constructor() {
        super();
        this.setColumns(this.getColumns())
            .setStore(this.getFrameworksStore())
    }

    private getFrameworksStore():IStore<FrameworkModel> {
        let firstBean = new FrameworkModel("Angular1", 1, new Date('2009/01/01')),
            secondBean = new FrameworkModel("Angular2", 1, new Date('2015/01/01'));

        let store:IStore<FrameworkModel> = new ArrayStore<FrameworkModel>()
            .add(firstBean)
            .add(secondBean);

        setInterval(function () {
            firstBean.counter = firstBean.counter + 1;
            secondBean.counter = secondBean.counter * 2;
        }, 1000);

        return store;
    }

    private getColumns():ICollection<IColumn> {
        return new ArrayList<IColumn>()
            .add(new Column().setName("name"))
            .add(new Column().setName("counter"))
            .add(new DateColumn().setName("released"));
    }
}
```

##### Template
```
<table>
	<tr>
		<td *ngFor="#col of columns">{{col.getDescription()}}</td>
	</tr>
	<tr *ngFor="#model of store">
		<td *ngFor="#col of columns">{{col.getModelValue(model)}}</td>
	</tr>
</table>
```