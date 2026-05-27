import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DistHeaderComponent } from '../../../shared/layout/dist-navigation/dist-header/dist-header.component';
import { DistAsideComponent } from '../../../shared/layout/dist-navigation/dist-aside/dist-aside.component';

@Component({
	selector: 'app-creance-dette',
	imports: [
		CommonModule,
		DistHeaderComponent,
		DistAsideComponent
	],
	templateUrl: './creance-dette.component.html',
	styleUrl: './creance-dette.component.css',
})
export class CreanceDetteComponent {

	navActive = Number(localStorage.getItem('track'))
	
	
	handleTrack(track: number){
		this.navActive = track
	}
}
