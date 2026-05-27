import { Component, Input, signal } from '@angular/core';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';

@Component({
	selector: 'app-sectionHeader',
	imports: [
		EntryAnimDirective
	],
	templateUrl: './section-header.component.html',
	styleUrl: './section-header.component.css',
})
export class SectionHeaderComponent {

	@Input() texts = signal({
		caption: '',
		title: '',
		sousTitle: ''
	})
}
