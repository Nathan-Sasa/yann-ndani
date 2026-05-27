import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, startWith, Subscription } from 'rxjs';
import { EntryAnimDirective } from '../../directives/entry-anim.directive';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-date',
    imports: [
		EntryAnimDirective,
		CommonModule
	],
    templateUrl: './date.component.html',
    styleUrl: './date.component.css',
})
export class DateComponent implements OnInit {

	now: Date = new Date();
	private timerSub!: Subscription;

	ngOnInit() {
		this.timerSub = interval(1000).subscribe(() => {
		this.now = new Date(); // Mise à jour de l'heure actuelle
		});
	}

	ngOnDestroy() {
		this.timerSub?.unsubscribe();
	}
}
