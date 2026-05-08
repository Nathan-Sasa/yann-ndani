import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from '../theme/theme.component';
import { infoApp } from '../../utils/info-app';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-header',
	imports: [
		RouterModule,
		CommonModule,
		ThemeComponent,
		DrawerModule, 
		ButtonModule
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

	protected app = {
		name: infoApp.name,
		logo: infoApp.logo
	}

	protected isMenuOpen: boolean = false

	lastScroll = 0
	navBarVisible = true
	scrollThreshold = 10

	toggleMenu(): void {

	}

	@HostListener('window:scroll', [])
	onScroll(){
		const currentScroll = window.pageYOffset || document.documentElement.scrollTop
		const header = document.querySelector('header')
		const appName = document.getElementById('appName')


		// if(Math.abs(currentScroll - this.lastScroll) < this.scrollThreshold) {
        //     return
        // }

		if(window.scrollY > 80){
			// window.innerWidth <= 640 && 
			header?.classList.add('bg-clr-bg-page/80', 'dark:bg-clr-bg-page-dark/80', 'backdrop-blur-[6px]', 'shadow-xs', 'border-line-b', 'border-clr-border-dark/30!', 'dark:border-clr-border-dark!')
			header?.classList.remove('bg-transparent', 'border-b!', 'shadow-none', 'border-transparent')
			appName?.classList.remove('text-clr-text-dark!')
			
		} else {
			header?.classList.remove('bg-clr-bg-page/80', 'dark:bg-clr-bg-page-dark/80', 'backdrop-blur-[6px]', 'shadow-xs', 'border-line-b', 'border-clr-border-dark/30!', 'dark:border-clr-border-dark!')
			header?.classList.add('bg-transparent', 'border-b!', 'shadow-none', 'border-transparent')
			appName?.classList.add('text-clr-text-dark!')
		}

		// if (window.innerWidth >= 640 && currentScroll < 100){
		// 	header?.classList.add('bg-clr-bg-page/70', 'dark:bg-clr-bg-page-dark/80', 'backdrop-blur-lg', 'shadow-xs', 'border-line-b')
		// 	header?.classList.remove('bg-transparent', 'shadow-none', 'border-transparent')
		// }

		// if (window.innerWidth >= 640 && currentScroll < 100){
		// 	header?.classList.remove('bg-clr-bg-page/70', 'dark:bg-clr-bg-page-dark/80', 'backdrop-blur-lg', 'shadow-xs', 'border-line-b')
		// 	header?.classList.add('bg-transparent', 'shadow-none', 'border-transparent')
		// }

		

		if(Math.abs(currentScroll - this.lastScroll) < this.scrollThreshold) {
            return
        }

        if(currentScroll > this.lastScroll && currentScroll > 240){
            this.navBarVisible = false
        } else {
            this.navBarVisible = true
        }

        this.lastScroll = currentScroll
	}


}
