import { Component } from '@angular/core';
import { DocumentationHeaderComponent } from '../../../shared/layout/documentation-header/documentation-header.component';

@Component({
	selector: 'app-documentation',
	imports: [
		DocumentationHeaderComponent
	],
	templateUrl: './documentation.component.html',
	styleUrl: './documentation.component.css',
})
export class DocumentationComponent {

}
