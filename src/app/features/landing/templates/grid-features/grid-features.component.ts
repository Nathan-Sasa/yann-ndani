import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../layouts/section-header/section-header.component';
import { GridFeaturesChartComponent } from '../../layouts/grid-features/grid-features-chart/grid-features-chart.component';
import { GridFeaturesStatisticComponent } from '../../layouts/grid-features/grid-features-statistic/grid-features-statistic.component';
import { GridFeaturesEmployeeComponent } from '../../layouts/grid-features/grid-features-employee/grid-features-employee.component';
import { GridFeaturesAuditComponent } from '../../layouts/grid-features/grid-features-audit/grid-features-audit.component';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';

@Component({
    selector: 'app-grid-features',
    imports: [
		SectionHeaderComponent,
		GridFeaturesChartComponent,
		GridFeaturesStatisticComponent,
		GridFeaturesEmployeeComponent,
		GridFeaturesAuditComponent,
		EntryAnimDirective
	],
    templateUrl: './grid-features.component.html',
    styleUrl: './grid-features.component.css',
})
export class GridFeaturesComponent {


	headerTitles = signal({
		caption: 'Le pouvoir de Yann',
		title: 'Boost ta vente et contrôle tes flux facilement',
		sousTitle: 'Yann ndani vous donne la possible de lorem ipsum'
	})
}
