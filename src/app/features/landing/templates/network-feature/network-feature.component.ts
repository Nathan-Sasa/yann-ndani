import { Component, signal, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { SectionHeaderComponent } from '../../layouts/section-header/section-header.component';
import { ConnectDeviceComponent } from './connect-device/connect-device.component';
import { LucideAngularModule, MonitorSmartphoneIcon, SendIcon } from 'lucide-angular';
import { OrganisationComponent } from '../../layouts/organisation/organisation.component';

@Component({
	selector: 'app-network-feature',
	imports: [
		SectionHeaderComponent,
		ConnectDeviceComponent,
		LucideAngularModule,
		OrganisationComponent
	],
	templateUrl: './network-feature.component.html',
	styleUrl: './network-feature.component.css',
})
export class NetworkFeatureComponent implements AfterViewInit {

	@ViewChild('cardBgHoverEffect', {static: false}) cardBgHoverEffect!: ElementRef

	headerTitles = signal({
		caption: 'Autres fonctionnalités',
		title: 'Allez plus loin avec Yann.',
		sousTitle: 'Découvrez les fonctionnalité connectées de Yann, qui vous permet de contrôler entièrement votre entreprise à distance.'
	})

	icons = {
		device: MonitorSmartphoneIcon,
		send: SendIcon
	}

	ngAfterViewInit(): void {
		this.loadCardBgHoverEffect()
	}

	cardHover = [
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}
	]

	loadCardBgHoverEffect() {
		const parent = this.cardBgHoverEffect.nativeElement;
		parent.addEventListener('mousemove', (e : MouseEvent) => {
			const cards = parent.getElementsByClassName('cardHover');

			for( const card of cards as any as HTMLElement[]) {
				const rect = card.getBoundingClientRect();

				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`)
			}
		})
	}
}
