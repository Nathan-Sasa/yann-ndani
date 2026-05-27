import { Component, ElementRef, signal, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
import { SectionHeaderComponent } from '../../layouts/section-header/section-header.component';

import gsap  from 'gsap'
import { RatingComponent } from '../../layouts/rating/rating.component';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';

@Component({
	selector: 'app-testimonial',
	imports: [
		SectionHeaderComponent,
		FormsModule, 
		Rating,
		RatingComponent,
		EntryAnimDirective
	],
	templateUrl: './testimonial.component.html',
	styleUrl: './testimonial.component.css',
})
export class TestimonialComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild('marqueeContent', { static: true }) marquee!: ElementRef;

	headerTitles = signal({
		caption: 'Avis',
		title: 'Ce que disent les utilisateurs',
		sousTitle: 'Voici ce que certains de nos plus de 2000 utilisateurs ont à dire sur le travail avec Yann ndani. '
	})

	testimonials = [
		{
			avatar: 'assets/images/development/profile/nathan-def.JPG',
			name: 'Nathan',
			post: 'CEO Simon Construction',
			text: 'si vous envisagez de reprendre le contrôle de la gestion de votre entrprise et le flux total, Yann ndani est l\'outil idéal pour commencer votre gestion. C\'est propre, c\'est simple, et intuitive. Yann ndani a été conçu pour  tous types d\'entreprise Petite, Moyenne et Géante. Faites le changement. Vous ne le regretterez pas. si vous envisagez de reprendre le contrôle de la gestion de votre entrprise et le flux total, Yann ndani est l\'outil idéal pour commencer votre gestion. C\'est propre, c\'est simple, et intuitive. Yann ndani a été conçu pour  tous types d\'entreprise Petite, Moyenne et Géante. Faites le changement. Vous ne le regretterez pas.',
			rating: 5
		},
		{
			avatar: 'assets/images/development/profile/nathan-julet.JPEG',
			name: 'Béni AMISI',
			post: 'Gestionnaire Ets Marco',
			text: 'si vous envisagez de reprendre le contrôle de la gestion de votre entrprise et le flux total, Yann ndani est l\'outil idéal pour commencer votre gestion. C\'est propre, c\'est simple, et intuitive. Yann ndani a été conçu pour  tous types d\'entreprise Petite, Moyenne et Géante. Faites le changement. Vous ne le regretterez pas.',
			rating: 4
		},
		{
			avatar: 'assets/images/development/profile/nathan-def.JPG',
			name: 'Ibrahim Souf',
			post: 'Priopriétaire Magasin Ibra',
			text: 'si vous envisagez de reprendre le contrôle de la gestion de votre entrprise et le flux total, Yann ndani est l\'outil idéal pour commencer votre gestion. C\'est propre, c\'est simple, et intuitive. Yann ndani a été conçu pour  tous types d\'entreprise Petite, Moyenne et Géante. Faites le changement. Vous ne le regretterez pas.',
			rating: 5
		},
		{
			avatar: 'assets/images/development/profile/van.jpg',
			name: 'Eldie V',
			post: 'CEO Lyv Mode',
			text: 'si vous envisagez de reprendre le contrôle de la gestion de votre entrprise et le flux total, Yann ndani est l\'outil idéal pour commencer votre gestion. C\'est propre, c\'est simple, et intuitive. Yann ndani a été conçu pour  tous types d\'entreprise Petite, Moyenne et Géante. Faites le changement. Vous ne le regretterez pas.',
			rating: 5
		},
		// {
		// 	avatar: '',
		// 	name: '',
		// 	post: '',
		// 	text: '',
		// 	rating: 5
		// },
		// {
		// 	avatar: '',
		// 	name: '',
		// 	post: '',
		// 	text: '',
		// 	rating: 5
		// },
	]

	ngOnInit(): void {
		// this.loadComments()
	}
	ngAfterViewInit(): void {
		this.infiniteMarquee()
	}
	
	ngOnDestroy(): void {
		this.infiniteMarquee()
	}


	speed = signal<number>(90)

	infiniteMarquee(): void {
		const element = this.marquee.nativeElement;
		const cardComment = document.querySelectorAll('.commentCard')

		// for(const card of cardComment as any as HTMLElement[]){
		// 	card.addEventListener('mouseenter', ()=> {
		// 		this.speed.set(70)
		// 		console.log('mouseenter card comment : ')
		// 		console.log('speed marquee : ', this.speed())
		// 	})
		// 	card.addEventListener('mouseleave', ()=> {
		// 		this.speed.set(30)
		// 		console.log('mouseenter card comment : ')
		// 		console.log('speed marquee : ', this.speed())
		// 	})
		// }

		// @ts-ignore
		gsap.to(element, {
			xPercent: -50,
			ease: 'none',
			duration: this.speed(),
			repeat: -1
		});
	}
}


// erreur a verifier plus tard ==================
// NG0913: An image with src http://localhost:4500/assets/images/development/profile/nathan-def.JPG has intrinsic file dimensions much larger than its rendered size. This can negatively impact application loading performance. For more information about addressing or disabling this warning, see https://angular.dev/errors/NG0913. Find more at https://v20.angular.dev/errors/NG0913