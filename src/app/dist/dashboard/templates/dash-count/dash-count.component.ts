import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, WalletIcon } from 'lucide-angular';
import { ReplaceCommaPipe } from '../../../../core/pipes/replace-comma.pipe';
import { routesTable } from '../../../../shared/utils/routes-list';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';

@Component({
	selector: 'app-dash-count',
	imports: [
		LucideAngularModule,
		RouterModule,
		CommonModule,
		ReplaceCommaPipe,
		EntryAnimDirective
	],
	templateUrl: './dash-count.component.html',
	styleUrl: './dash-count.component.css',
})
export class DashCountComponent {


	user = signal({
		fistName: 'Nathan'
	})

	counts = [
		{
			name: 'Total ventes',
			mount: '00',
			icon: WalletIcon,
			route: routesTable.rapport_vente
		},
		{
			name: 'Total achat',
			mount: '00',
			icon: WalletIcon,
			route: routesTable.achat
		},
		{
			name: 'Chiffre d\'affaire',
			mount: '00',
			icon: WalletIcon,
			route: routesTable.rapport_vente
		},
		{
			name: 'Solde',
			mount: '00',
			icon: WalletIcon,
			route: routesTable.tresorerie
		},
	]
}
