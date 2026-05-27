import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DistHeaderComponent } from '../../../shared/layout/dist-navigation/dist-header/dist-header.component';
import { DistAsideComponent } from '../../../shared/layout/dist-navigation/dist-aside/dist-aside.component';

@Component({
	selector: 'app-ventes',
	imports: [
		CommonModule,
		DistHeaderComponent,
		DistAsideComponent
	],
	templateUrl: './ventes.component.html',
	styleUrl: './ventes.component.css',
})
export class VentesComponent {

	navActive = Number(localStorage.getItem('track'))
	
	
	handleTrack(track: number){
		this.navActive = track
	}
}
