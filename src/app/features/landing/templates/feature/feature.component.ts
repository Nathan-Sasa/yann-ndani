import { Component, signal, ViewChild, ElementRef, } from '@angular/core';
import { InvitationComponent } from './invitation/invitation.component';
import { SectionHeaderComponent } from '../../layouts/section-header/section-header.component';
import { ImportExportFilesComponent } from './import-export-files/import-export-files.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { CodeBarreComponent } from './scan-code-bare/code-barre.component';
import { ExpirationDateComponent } from './expiration-date/expiration-date.component';
import { ScrollAnimDirective } from '../../../../shared/directives/scroll-anim.directive';

@Component({
    selector: 'app-feature',
    imports: [
		SectionHeaderComponent,
		ImportExportFilesComponent,
		CorbeilleComponent,
		InvitationComponent,
		CodeBarreComponent,
		ExpirationDateComponent,
		ScrollAnimDirective
    ],
    templateUrl: './feature.component.html',
    styleUrl: './feature.component.css',
})
export class FeatureComponent {

	@ViewChild('scrollTop') scrollTop!: ElementRef

	headerTitles = signal({
		caption: 'Fonctionnalités et Avantages.',
		title: 'Avec Yann vous faites bien plus.',
		sousTitle: 'Yann ndani n\'est pas simplement un outil de gestion de ventes et de stock, mais bien plus encore. Avec Yann vous contrôlez le flux de votre entreprise. Vous travaillez sans connexion internet et vous faites les backup dès que vous êtes connecté, vous contrôlez de partout avec vos appareils, vous avez la possibilité d\'inviter d\'autres personnes à vous aider en leur donnant des rôles et permissions, vous bénéficier des vraies analyses comptables et statistique. Nous travaillons avec des vrais experts comptables et analystes de données.'
	})

	scrollToTop(): void {
		console.log('scroll : ', true)
		if(this.scrollTop){
			setTimeout(() => {
				this.scrollTop.nativeElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			}, 200)
		}
	}
}

// Vous avez la possibilité d\'inviter d\'autres personnes pour vous aider à : Gérer, Comptabiser et faire le stastique si vous maquez le temps, tout en gardant le contrôle. Nous travaillons avec des experts comptable et analyse de données pour diminuer les riques des erreurs, pertes, vole et vous statisfaire