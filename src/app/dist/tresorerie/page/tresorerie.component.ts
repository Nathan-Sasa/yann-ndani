import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DistHeaderComponent } from '../../../shared/layout/dist-navigation/dist-header/dist-header.component';
import { DistAsideComponent } from '../../../shared/layout/dist-navigation/dist-aside/dist-aside.component';

@Component({
	selector: 'app-tresorerie',
	imports: [
		CommonModule,
		DistHeaderComponent,
		DistAsideComponent
	],
	templateUrl: './tresorerie.component.html',
	styleUrl: './tresorerie.component.css',
})
export class TresorerieComponent {


	navActive = Number(localStorage.getItem('track'))
	
	
	handleTrack(track: number){
		this.navActive = track
	}
}
