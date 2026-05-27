import { Component } from '@angular/core';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';

@Component({
	selector: 'app-dash-products',
	imports: [
		EntryAnimDirective
	],
	templateUrl: './dash-products.component.html',
	styleUrl: './dash-products.component.css',
})
export class DashProductsComponent {

}
