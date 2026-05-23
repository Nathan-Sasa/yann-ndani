import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from '../theme/theme.component';
import { infoApp } from '../../utils/info-app';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
// ThemeComponent,

@Component({
    selector: 'app-documentation-header',
    imports: [
		RouterModule,
		CommonModule,
		DrawerModule, 
		ButtonModule
    ],
    templateUrl: './documentation-header.component.html',
    styleUrl: './documentation-header.component.css',
})
export class DocumentationHeaderComponent {

	protected app = {
		name: infoApp.name,
		logo: infoApp.logo
	}

	protected isMenuOpen: boolean = false
}
