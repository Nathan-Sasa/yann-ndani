import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, MenuIcon, LayoutDashboardIcon, LogOutIcon, ListIcon, ChevronRightIcon, ChevronLeftIcon, ChartColumnIcon, ClipboardListIcon } from 'lucide-angular';
import { appAvatars, infoApp } from '../../../utils/info-app';
import { EntryAnimDirective } from '../../../directives/entry-anim.directive';
import { SeparationComponent } from '../../../components/separator/separation.component';
import { routesAccount, routesInvitation, routesTable } from '../../../utils/routes-list';
// import { UserService } from '../../../../core/auth/services/user.service';
// import { NetworkService } from '../../../../core/auth/services/network.service';

@Component({
	selector: 'app-dist-aside',
	imports: [
		RouterModule,
		CommonModule,
		LucideAngularModule,
		EntryAnimDirective,
		SeparationComponent
	],
	templateUrl: './dist-aside.component.html',
	styleUrl: './dist-aside.component.css',
})
export class DistAsideComponent {

	navActive = Number(localStorage.getItem('track'))
	@Output() trackNav = new EventEmitter<number>()

	app = signal({
		name: infoApp.name,
		logo: infoApp.logo
	})

	avatar = signal(appAvatars.avatar)

	icons = {
		menu: MenuIcon,
		dash: LayoutDashboardIcon,
		list: ListIcon,
		logout: LogOutIcon,
		chevronRight: ChevronRightIcon,
		chevronLeft: ChevronLeftIcon
	}

	trackOn(){
		localStorage.setItem('track', '1')
		this.trackNav.emit(Number(localStorage.getItem('track')))
		this.navActive = Number(localStorage.getItem('track'))
	}
		
	trackOff(){
		localStorage.setItem('track', '0')
		this.trackNav.emit(Number(localStorage.getItem('track')))
		this.navActive = Number(localStorage.getItem('track'))
	}


	routes = {
		dashboard: {
			title: 'Tableau de board',
			route: routesTable.dashboard,
			icon: this.icons.dash
		},
		tables : [
			{
				title: 'Produits',
				route: routesTable.product,
				icon: ClipboardListIcon
			},
			{
				title: 'Achat',
				route: routesTable.achat,
				icon: this.icons.list
			},
			{
				title: 'Rapport des ventes',
				route: routesTable.rapport_vente,
				icon: ChartColumnIcon
			},
			{
				title: 'Trésorerie',
				route: routesTable.tresorerie,
				icon: this.icons.list
			},
			{
				title: 'Créances et dettes',
				route: routesTable.creance_dette,
				icon: this.icons.list
			},
		],
		account: [
			{
				title: 'Compte',
				route: routesAccount.account,
				icon: this.icons.list
			},
			{
				title: 'Licence',
				route: routesAccount.license,
				icon: this.icons.list
			},
			{
				title: 'Document',
				route: routesAccount.document,
				icon: this.icons.list
			},
		],
		invitation: [
			{
				title: 'Mes invités',
				route: routesInvitation.myInvites,
				icon: this.icons.list
			}
		]
	}









	// handleLogout(): void {
	// 	this.userService.purgeAuth()
	// }
}
