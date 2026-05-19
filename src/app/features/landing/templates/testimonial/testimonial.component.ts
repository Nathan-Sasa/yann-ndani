import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
import { SectionHeaderComponent } from '../../layouts/section-header/section-header.component';

@Component({
	selector: 'app-testimonial',
	imports: [
		SectionHeaderComponent,
		FormsModule, 
		Rating
	],
	templateUrl: './testimonial.component.html',
	styleUrl: './testimonial.component.css',
})
export class TestimonialComponent {

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
			text: 'si vous envisagez de reprendre le contrôle de la gestion de votre entrprise et le flux total, Yann ndani est l\'outil idéal pour commencer votre gestion. C\'est propre, c\'est simple, et intuitive. Yann ndani a été conçu pour  tous types d\'entreprise Petite, Moyenne et Géante. Faites le changement. Vous ne le regretterez pas.',
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
			name: 'Lydia Van',
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
}
