# Angular2 Filtered Store

This is a fork from [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter) project.

### How to start

1. npm install
2. npm start
3. http://localhost:3000

### Usage example

##### Grids
```
@Component(new FrameworkGridComponent())
export class FrameworkGrid extends DefaultFrameworkGrid<FrameworkStore> {

    protected storeSize:boolean = true;

    constructor(protected store:FrameworkStore, protected editable:Editable) {
        super(store, editable);
    }
}
```

```
class FrameworkFilteredPredicate implements IPredicate<FrameworkModel> {

    public apply(machine:FrameworkModel):boolean {
        return machine.getName().indexOf('Ext') > -1;
    }
}

const FRAMEWORK_FILTERED_PREDICATE:IPredicate<FrameworkModel> = new FrameworkFilteredPredicate();

@Component(new FrameworkFilteredGridComponent())
export class FrameworkFilteredGrid extends DefaultFrameworkGrid<FrameworkStore> {

    protected filterPredicate:IPredicate<FrameworkModel> = FRAMEWORK_FILTERED_PREDICATE;

    constructor(protected store:FrameworkStore, protected editable:Editable) {
        super(store, editable);
    }
}
```

##### Template
```
<table>
	<tr>
		<td *ngFor="#col of columns">{{col.getDescription()}}</td>
	</tr>
  <tr *ngFor="#model of store | FilterPipe:filterPredicate" (click)="onRowClick($event, model)">
		<td *ngFor="#col of columns" [ngSwitch]="col.getColumnType()" (click)="onClick($event, col, model)">
			<div *ngSwitchWhen="'checkbox'">
				<input type="checkbox" checked="{{col.getModelValue(model)}}" (change)="onModifyModel($event, col, model)"/>
			</div>
			<div *ngSwitchDefault>
				{{col.getModelValue(model)}}
			</div>
		</td>
	</tr>
</table>
<div *ngIf="storeSize"><b>Store size:</b> {{store.getSize()}}</div>
```

### An example of the work program
```
Angular2 Iterator preview

Angular1	11	01/01/2009
Angular2	1024	01/01/2015

...

Angular1	13	01/01/2009
Angular2	4096	01/01/2015

...
```

### Sources

[Common package](src/common)  
[Main view](src/app/home/view)