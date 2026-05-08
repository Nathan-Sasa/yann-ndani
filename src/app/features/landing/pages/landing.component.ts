import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/layout/header/header.component';
import { HeroSectionComponent } from '../layout/hero/hero-section.component';
import { AboutComponent } from '../layout/about/about.component';
import { FeatureComponent } from '../layout/feature/feature.component'

@Component({
    selector: 'app-landing',
    imports: [
		HeaderComponent,
        HeroSectionComponent,
        AboutComponent,
        FeatureComponent
	],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
})
export class LandingComponent {

}
