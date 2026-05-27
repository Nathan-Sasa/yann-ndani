import { Component } from '@angular/core';
import { EntryAnimDirective } from '../../../../../shared/directives/entry-anim.directive';

@Component({
	selector: 'app-grid-features-audit',
	imports: [
		EntryAnimDirective
	],
	templateUrl: './grid-features-audit.component.html',
	styleUrl: './grid-features-audit.component.css',
})
export class GridFeaturesAuditComponent {


	avatars = [
		{
			image: 'assets/images/development/profile/nathan-red.PNG',
			alt: 'person-audit-image'
		},
		{
			image: 'assets/images/development/profile/nathan-red.PNG',
			alt: 'person-audit-image'
		},
		{
			image: 'assets/images/development/profile/nathan-red.PNG',
			alt: 'person-audit-image'
		},
		{
			image: 'assets/images/development/profile/nathan-red.PNG',
			alt: 'person-audit-image'
		},
	]
}
