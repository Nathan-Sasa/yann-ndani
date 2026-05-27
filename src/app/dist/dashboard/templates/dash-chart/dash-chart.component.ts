import { Component } from '@angular/core';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { AgCharts } from "ag-charts-angular";
import {
	AgChartOptions,
	AreaSeriesModule,
	CategoryAxisModule,
	LegendModule,
	ModuleRegistry,
	NumberAxisModule,
} from "ag-charts-community";
import { getData } from '../../../../shared/mock/chart-data';


ModuleRegistry.registerModules([
	AreaSeriesModule,
	CategoryAxisModule,
	LegendModule,
	NumberAxisModule,
]);

@Component({
    selector: 'app-dash-chart',
    imports: [
		EntryAnimDirective,
		AgCharts
    ],
    templateUrl: './dash-chart.component.html',
    styleUrl: './dash-chart.component.css',
})
export class DashChartComponent {
	public options: AgChartOptions;

	constructor () {
		this.options = {
			title: {
				text: "Sales by Month",
			},
      		data: getData(),
			series: [
				{
					type: "area",
					xKey: "month",
					yKey: "subscriptions",
					stacked: true,
					yName: "Subscriptions",
				},
				{
					type: "area",
					xKey: "month",
					yKey: "services",
					stacked: true,
					yName: "Services",
				},
				{
					type: "area",
					xKey: "month",
					yKey: "products",
					stacked: true,
					yName: "Products",
				},
			],
		};
	}
}
