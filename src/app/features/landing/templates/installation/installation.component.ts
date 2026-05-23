import { Component, signal } from '@angular/core';
import { LucideAngularModule, PlayIcon, XIcon, DownloadIcon, CogIcon } from 'lucide-angular';
import { SectionHeaderComponent } from '../../layouts/section-header/section-header.component';

@Component({
	selector: 'app-installation',
	imports: [
		LucideAngularModule,
		SectionHeaderComponent
	],
	templateUrl: './installation.component.html',
	styleUrl: './installation.component.css',
})
export class InstallationComponent {

	icons ={ 
		play: PlayIcon,
		close: XIcon,
		download: DownloadIcon,
		install: CogIcon
	}

	headerTitles = signal({
		caption: 'Premier pas !',
		title: 'Installez Yann en quelques étapes simples',
		sousTitle: 'Découvrez comment installer Yann Ndani et commencez à optimiser votre développement dès aujourd\'hui !'
	})
}
