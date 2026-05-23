import { Component, ElementRef, signal, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import gsap  from 'gsap'
import { SectionHeaderComponent } from '../../layouts/section-header/section-header.component';

@Component({
    selector: 'app-partner',
    imports: [
		SectionHeaderComponent
	],
    templateUrl: './partner.component.html',
    styleUrl: './partner.component.css',
})
export class PartnerComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild('partnerMarqueeContent', { static: true }) marquee!: ElementRef;

	headerTitles = signal({
		caption: 'nos partenaires',
		title: 'Plusieur personnes et entreprise nous font confiance',
		sousTitle: 'Devenez l\'un de nos partenaires de confiance.'
	})

	// données mock ======================
	partners = [
		{
			avatar: 'assets/images/development/profile/nathan-julet.JPEG',
			name: 'Peter Kalay',
			poste: 'BTS Aron SARL'
		},
		{
			avatar: 'assets/images/development/profile/nathan-red.PNG',
			name: 'Nathan SASA',
			poste: 'PDG Nathan Web Corporation'
		},
		{
			avatar: 'assets/images/development/profile/van.jpg',
			name: 'Lydia Van',
			poste: 'DG Apex Société'
		},
		{
			avatar: 'assets/images/development/profile/nathan-julet.JPEG',
			name: 'Peter Kalay',
			poste: 'BTS Aron SARL'
		},
		{
			avatar: 'assets/images/development/profile/nathan-red.PNG',
			name: 'Nathan SASA',
			poste: 'PDG Nathan Web Corporation'
		},
		{
			avatar: 'assets/images/development/profile/van.jpg',
			name: 'Eldie V',
			poste: 'DG Apex Société'
		},
	]

	// ================================



	ngOnInit(): void {
		// this.loadComments()
	}
	ngAfterViewInit(): void {
		this.infiniteMarquee()
	}
	ngOnDestroy(): void {
		this.infiniteMarquee()
	}

	infiniteMarquee(): void {
		const element = this.marquee.nativeElement;

		// @ts-ignore
		gsap.to(element, {
			xPercent: -50,
			ease: 'none',
			duration: 60,
			repeat: -1
		});
	}
}
