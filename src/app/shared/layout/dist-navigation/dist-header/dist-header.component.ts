import { Component, Input, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, BellIcon, ChevronDownIcon, ChevronRightIcon, ListIcon, XIcon, LayoutDashboardIcon, LogOutIcon, ChartColumnIcon, ClipboardListIcon } from 'lucide-angular'
import { appAvatars, infoApp } from '../../../utils/info-app';
import { SeparationComponent } from '../../../components/separator/separation.component';
import { routesAccount, routesInvitation, routesTable } from '../../../utils/routes-list';
import { EntryAnimDirective } from '../../../directives/entry-anim.directive';
import { ThemeComponent } from '../../theme/theme.component';
import { DateComponent } from '../../../components/date/date.component';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
    selector: 'app-dist-header',
    imports: [
      CommonModule,
		LucideAngularModule,
		RouterModule,
		EntryAnimDirective,
		SeparationComponent,
		ThemeComponent,
		DateComponent,
		DrawerModule,
		ButtonModule,
		Ripple, 
		AvatarModule, 
		StyleClass,
    ],
    templateUrl: './dist-header.component.html',
    styleUrl: './dist-header.component.css',
})
export class DistHeaderComponent {

	@Input() headerTrack = Number(localStorage.getItem('track'))
	@ViewChild('drawerRef') drawerRef!: Drawer;

	sessionDropdown = false
	navOpen: boolean = false

	app = signal({
		name: infoApp.name,
		logo: infoApp.logo
	})

	icons = {
		notification: BellIcon,
		chevronDown: ChevronDownIcon,
		chevronRight: ChevronRightIcon,
		list: ListIcon,
		close: XIcon,
		dash: LayoutDashboardIcon,
		logout: LogOutIcon
	}

	avatar = signal(appAvatars.avatar_2)

	handleDropdown(){
		this.sessionDropdown = !this.sessionDropdown
	}

	closeCallback(e: Event): void {
        this.drawerRef.close(e);
    }
	toggleNav(){
		this.navOpen = !this.navOpen
	}


	// routes ==================================
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
}
