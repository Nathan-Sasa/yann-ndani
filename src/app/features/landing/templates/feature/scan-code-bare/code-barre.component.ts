import { Component } from '@angular/core';
import { LucideAngularModule, PlayIcon, XIcon } from 'lucide-angular';
import { ScrollAnimDirective } from '../../../../../shared/directives/scroll-anim.directive';

@Component({
	selector: 'app-code-barre',
	imports: [
		LucideAngularModule,
		ScrollAnimDirective
	],
	templateUrl: './code-barre.component.html',
	styleUrl: './code-barre.component.css',
})
export class CodeBarreComponent {

	icons = {
		play: PlayIcon,
		close: XIcon
	}
}
