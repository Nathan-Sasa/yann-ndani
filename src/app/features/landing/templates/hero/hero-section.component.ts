import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StatistiqueCounterComponent } from '../../layouts/statisticCounter/statistique-counter.component';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';

@Component({
    selector: 'app-hero-section',
    imports: [
		RouterModule,
		CommonModule,
        StatistiqueCounterComponent,
        EntryAnimDirective
	],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {

}
