import { Component, inject, effect, computed } from '@angular/core';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { ThemeAppService, AppTheme } from '../../../../core/services/themeApp.service';
import { AgCharts } from "ag-charts-angular";
import {
	AgChartOptions,
	AreaSeriesModule,
	BarSeriesModule,
	CategoryAxisModule,
	LegendModule,
	ModuleRegistry,
	NumberAxisModule,
} from "ag-charts-community";
import { getData, getBarData } from '../../../../shared/mock/chart-data';


// ModuleRegistry.registerModules([
// 	AreaSeriesModule,
// 	CategoryAxisModule,
// 	LegendModule,
// 	NumberAxisModule,
// ]);

ModuleRegistry.registerModules([
	BarSeriesModule,
	CategoryAxisModule,
	LegendModule,
	NumberAxisModule,
]);

// type AgChartThemeName =
//     | 'ag-default'
//     | 'ag-default-dark'
//     | 'ag-sheets'
//     | 'ag-sheets-dark'
//     | 'ag-polychroma'
//     | 'ag-polychroma-dark'
//     | 'ag-vivid'
//     | 'ag-vivid-dark'
//     | 'ag-material'
//     | 'ag-material-dark';

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
	// public options: AgChartOptions;

	private themeService = inject(ThemeAppService);

	public readonly options = computed<AgChartOptions>(() => {
		const themeActuel = this.themeService['actualTheme']();
		const agGridTheme = themeActuel === AppTheme.Dark ? 'ag-polychroma-dark' : 'ag-default';

		// return {
		// 	title: {
		// 		text: "Ventes par mois",
		// 	},
		// 	data: getData(),
		// 	series: [
		// 		{
		// 			type: "area",
		// 			xKey: "mois",
		// 			yKey: "subscriptions",
		// 			stacked: true,
		// 			yName: "Subscriptions",
		// 		},
		// 		{
		// 			type: "area",
		// 			xKey: "mois",
		// 			yKey: "services",
		// 			stacked: true,
		// 			yName: "Services",
		// 		},
		// 		{
		// 			type: "area",
		// 			xKey: "mois",
		// 			yKey: "products",
		// 			stacked: true,
		// 			yName: "Products",
		// 		},
		// 	],
		// 	theme: agGridTheme
		// };

		return {
			title: {
				text: "Apple's Revenue by Product Category",
			},
			subtitle: {
				text: "In Billion U.S. Dollars",
			},
			data: getBarData(),
			series: [
				{
				type: "bar",
				direction: "horizontal",
				xKey: "quarter",
				yKey: "iphone",
				yName: "iPhone",
				},
				{
				type: "bar",
				direction: "horizontal",
				xKey: "quarter",
				yKey: "mac",
				yName: "Mac",
				},
				{
				type: "bar",
				direction: "horizontal",
				xKey: "quarter",
				yKey: "ipad",
				yName: "iPad",
				},
				{
				type: "bar",
				direction: "horizontal",
				xKey: "quarter",
				yKey: "wearables",
				yName: "Wearables",
				},
				{
				type: "bar",
				direction: "horizontal",
				xKey: "quarter",
				yKey: "services",
				yName: "Services",
				},
			],
		}
	})

	// constructor () {

	// 	effect(() => {
	// 		const themeActuel = this.themeService['actualTheme']();

	// 		const agGridTheme = themeActuel === AppTheme.Dark ? 'ag-default-dark' : 'ag-default';

	// 		this.options = {
	// 			title: {
	// 				text: "Sales by Month",
	// 			},
	// 			  data: getData(),
	// 			series: [
	// 				{
	// 					type: "area",
	// 					xKey: "month",
	// 					yKey: "subscriptions",
	// 					stacked: true,
	// 					yName: "Subscriptions",
	// 				},
	// 				{
	// 					type: "area",
	// 					xKey: "month",
	// 					yKey: "services",
	// 					stacked: true,
	// 					yName: "Services",
	// 				},
	// 				{
	// 					type: "area",
	// 					xKey: "month",
	// 					yKey: "products",
	// 					stacked: true,
	// 					yName: "Products",
	// 				},
	// 			],
	// 			theme: agGridTheme
	// 		};
	// 	})
	// }
}
