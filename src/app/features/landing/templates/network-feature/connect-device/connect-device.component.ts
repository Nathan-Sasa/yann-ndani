import { Component } from '@angular/core';
import { LucideAngularModule, PlayIcon, XIcon } from 'lucide-angular';

@Component({
	selector: 'app-connect-device',
	imports: [
		LucideAngularModule
	],
	templateUrl: './connect-device.component.html',
	styleUrl: './connect-device.component.css',
})
export class ConnectDeviceComponent {

	icons = {
		play: PlayIcon,
		close: XIcon
	}
}
