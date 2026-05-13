import { Component, Input, signal } from '@angular/core';

@Component({
	selector: 'app-sectionHeader',
	imports: [
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
