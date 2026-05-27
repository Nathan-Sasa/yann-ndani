import { Component } from '@angular/core';
import { EntryAnimDirective } from '../../directives/entry-anim.directive';

@Component({
    selector: 'app-separator',
    imports: [
		EntryAnimDirective
	],
    templateUrl: './separation.component.html',
    styleUrl: './separation.component.css',
})
export class SeparationComponent {

}
