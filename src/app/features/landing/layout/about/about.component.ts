import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BrainIcon, LucideAngularModule } from 'lucide-angular';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

@Component({
	selector: 'app-about',
	imports: [
		LucideAngularModule,
		SectionHeaderComponent
	],
	templateUrl: './about.component.html',
	styleUrl: './about.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

	headerTitles = signal({
		caption: 'Raison d\'être de Yann Ndani',
		title: 'Pourquoi faire confiance à Yann ?',
		sousTitle: 'Yann ndani vous donne la possible de lorem ipsum'
	})

	icons = {
		balance: BrainIcon
	}

	items = [
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime enim sed sequi vero. Deserunt dignissimos cupiditate doloribus blanditiis eligendi, ea vitae nulla ut quo accusamus ipsam commodi fugit ullam, voluptatibus illo voluptatum facilis sed nisi vero omnis inventore. Doloribus.',
			icon: this.icons.balance
		},
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime enim sed sequi vero. Deserunt dignissimos cupiditate doloribus blanditiis eligendi, ea vitae nulla ut quo accusamus ipsam commodi fugit ullam, voluptatibus illo voluptatum facilis sed nisi vero omnis inventore. Doloribus.',
			icon: this.icons.balance
		},
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime enim sed sequi vero. Deserunt dignissimos cupiditate doloribus blanditiis eligendi, ea vitae nulla ut quo accusamus ipsam commodi fugit ullam, voluptatibus illo voluptatum facilis sed nisi vero omnis inventore. Doloribus.',
			icon: this.icons.balance
		},
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime enim sed sequi vero. Deserunt dignissimos cupiditate doloribus blanditiis eligendi, ea vitae nulla ut quo accusamus ipsam commodi fugit ullam, voluptatibus illo voluptatum facilis sed nisi vero omnis inventore. Doloribus.',
			icon: this.icons.balance
		},
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime enim sed sequi vero. Deserunt dignissimos cupiditate doloribus blanditiis eligendi, ea vitae nulla ut quo accusamus ipsam commodi fugit ullam, voluptatibus illo voluptatum facilis sed nisi vero omnis inventore. Doloribus.',
			icon: this.icons.balance
		},
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime enim sed sequi vero. Deserunt dignissimos cupiditate doloribus blanditiis eligendi, ea vitae nulla ut quo accusamus ipsam commodi fugit ullam, voluptatibus illo voluptatum facilis sed nisi vero omnis inventore. Doloribus.',
			icon: this.icons.balance
		},
	]
}
