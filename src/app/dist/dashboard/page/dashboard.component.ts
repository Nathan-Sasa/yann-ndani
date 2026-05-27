import { Component } from '@angular/core';
import { DistHeaderComponent } from '../../../shared/layout/dist-navigation/dist-header/dist-header.component';
import { DistAsideComponent } from '../../../shared/layout/dist-navigation/dist-aside/dist-aside.component';
import { CommonModule } from '@angular/common';
import { DashCountComponent } from '../templates/dash-count/dash-count.component';
import { DashChartComponent } from '../templates/dash-chart/dash-chart.component';
import { DashChartTresorerieComponent } from '../templates/dash-chart-tresorerie/dash-chart-tresorerie.component';
import { DashProductsComponent } from '../templates/dash-products/dash-products.component';

@Component({
    selector: 'app-dashboard',
    imports: [
        DistHeaderComponent,
        DistAsideComponent,
        CommonModule,
        DashCountComponent,
        DashChartComponent,
        DashChartTresorerieComponent,
        DashProductsComponent
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

    navActive = Number(localStorage.getItem('track'))
	
	
	handleTrack(track: number){
		this.navActive = track
	}
}
