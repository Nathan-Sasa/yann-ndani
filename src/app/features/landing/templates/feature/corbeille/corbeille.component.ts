import { Component } from '@angular/core';
import { LucideAngularModule, PlayIcon, XIcon } from 'lucide-angular';
import { ScrollAnimDirective } from '../../../../../shared/directives/scroll-anim.directive';

@Component({
	selector: 'app-corbeille',
	imports: [
		LucideAngularModule,
		ScrollAnimDirective
	],
	templateUrl: './corbeille.component.html',
	styleUrl: './corbeille.component.css',
})
export class CorbeilleComponent {

	icons = {
		play: PlayIcon,
		close: XIcon
	}
}
