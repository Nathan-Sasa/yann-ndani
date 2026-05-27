import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ContactsComponent } from '../../layouts/contacts/contacts.component';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-cta',
	imports: [
		RouterModule,
		ContactsComponent,
		EntryAnimDirective
	],
	templateUrl: './cta.component.html',
	styleUrl: './cta.component.css',
})
export class CtaComponent implements AfterViewInit {

	@ViewChild('ctaBgHoverEffect', {static: false}) ctaBgHoverEffect!: ElementRef
	
	ctaCardHover = [
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
		{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {},
	]

	ngAfterViewInit(): void {
		this.loadCtaBgHoverEffect()
	}

	loadCtaBgHoverEffect() {
		const parent = this.ctaBgHoverEffect.nativeElement;
		parent.addEventListener('mousemove', (e : MouseEvent) => {
			const cards = parent.getElementsByClassName('ctaCardHover');

			for( const card of cards as any as HTMLElement[]) {
				const rect = card.getBoundingClientRect();

				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`)
				// console.log('mouse position : ', x, ',', y)
			}
		})
	}
}
