import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DistHeaderComponent } from '../../../shared/layout/dist-navigation/dist-header/dist-header.component';
import { DistAsideComponent } from '../../../shared/layout/dist-navigation/dist-aside/dist-aside.component';

@Component({
	selector: 'app-achat',
	imports: [
		CommonModule,
		DistHeaderComponent,
		DistAsideComponent
	],
	templateUrl: './achat.component.html',
	styleUrl: './achat.component.css',
})
export class AchatComponent {

	navActive = Number(localStorage.getItem('track'))
	
	
	handleTrack(track: number){
		this.navActive = track
	}
}
