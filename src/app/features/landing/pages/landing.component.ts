import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/layout/header/header.component';
import { HeroSectionComponent } from '../templates/hero/hero-section.component';
import { AboutComponent } from '../templates/about/about.component';
import { FeatureComponent } from '../templates/feature/feature.component'
import { InstallationComponent } from '../templates/installation/installation.component';
import { NetworkFeatureComponent } from '../templates/network-feature/network-feature.component';

@Component({
    selector: 'app-landing',
    imports: [
		HeaderComponent,
        HeroSectionComponent,
        AboutComponent,
        FeatureComponent,
        InstallationComponent,
        NetworkFeatureComponent
	],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
})
export class LandingComponent {

}
