import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DistHeaderComponent } from '../../../shared/layout/dist-navigation/dist-header/dist-header.component';
import { DistAsideComponent } from '../../../shared/layout/dist-navigation/dist-aside/dist-aside.component';

@Component({
    selector: 'app-products',
    imports: [
		DistAsideComponent,
		DistHeaderComponent,
		CommonModule
    ],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
})
export class ProductsComponent {

	navActive = Number(localStorage.getItem('track'))
	
	
	handleTrack(track: number){
		this.navActive = track
	}
}
