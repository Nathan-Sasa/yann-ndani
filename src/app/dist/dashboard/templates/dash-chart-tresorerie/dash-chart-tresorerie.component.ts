import { Component, inject, effect, computed } from '@angular/core';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { ThemeAppService, AppTheme } from '../../../../core/services/themeApp.service';
import { AgCharts } from "ag-charts-angular";
import {
	AgChartOptions,
	LegendModule,
	ModuleRegistry,
	PieSeriesModule,
} from "ag-charts-community";
import { getDashPieChart } from '../../../../shared/mock/chart-data';
import { agChartTheme } from '../../../../shared/utils/agChartTheme'

ModuleRegistry.registerModules([LegendModule, PieSeriesModule]);

type AgChartThemeName =
| 'ag-default'
| 'ag-default-dark'
| 'ag-sheets'
| 'ag-sheets-dark'
| 'ag-polychroma'
| 'ag-polychroma-dark'
| 'ag-vivid'
| 'ag-vivid-dark'
| 'ag-material'
| 'ag-material-dark';


@Component({
	selector: 'app-dash-chart-tresorerie',
	imports: [
		EntryAnimDirective,
		AgCharts
	],
	templateUrl: './dash-chart-tresorerie.component.html',
	styleUrl: './dash-chart-tresorerie.component.css',
})
export class DashChartTresorerieComponent {

	private themeService = inject(ThemeAppService);

	// themChart: AgChartThemeName = 'ag-default'
	
	public readonly options = computed<AgChartOptions>(() => {

		const themeActuel = this.themeService['actualTheme']();
		const agGridTheme = themeActuel === AppTheme.Dark ? 'ag-polychroma-dark' : 'ag-default'; 
	
		return {
			data: getDashPieChart(),
			title: {
				text: "Répartion de la trésorérie",
			},
			theme: agGridTheme,
			series: [
				{
				type: "pie",
				angleKey: "amount",
				calloutLabelKey: "asset",
				sectorLabelKey: "amount",
				sectorLabel: {
					color: "white",
					fontWeight: "bold",
					formatter: ({ value }) => `$${(value / 1000).toFixed(0)}K`,
				},
				},
			],
		}
	})
}
