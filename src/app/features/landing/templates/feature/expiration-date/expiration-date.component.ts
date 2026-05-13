import { Component } from '@angular/core';
import { LucideAngularModule, PlayIcon, XIcon } from 'lucide-angular';
import { ScrollAnimDirective } from '../../../../../shared/directives/scroll-anim.directive';
// import { ParallaxDirective } from '../../../../../shared/directives/parallax.directive';
// ParallaxDirective

@Component({
	selector: 'app-expiration-date',
	imports: [
		LucideAngularModule,
		ScrollAnimDirective
	],
	templateUrl: './expiration-date.component.html',
	styleUrl: './expiration-date.component.css',
})
export class ExpirationDateComponent {

	icons = {
		play: PlayIcon,
		close: XIcon
	}
}
