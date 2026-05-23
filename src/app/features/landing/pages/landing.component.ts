import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/layout/header/header.component';
import { HeroSectionComponent } from '../templates/hero/hero-section.component';
import { GridFeaturesComponent } from '../templates/grid-features/grid-features.component'
import { AboutComponent } from '../templates/about/about.component';
import { FeatureComponent } from '../templates/feature/feature.component'
import { InstallationComponent } from '../templates/installation/installation.component';
import { NetworkFeatureComponent } from '../templates/network-feature/network-feature.component';
import { CtaComponent } from '../templates/cta/cta.component';
import { TestimonialComponent } from '../templates/testimonial/testimonial.component';
import { PartnerComponent } from '../templates/partner/partner.component';
import { FooterComponent } from '../../../shared/layout/footer/footer.component';

@Component({
    selector: 'app-landing',
    imports: [
		HeaderComponent,
        HeroSectionComponent,
        GridFeaturesComponent,
        AboutComponent,
        FeatureComponent,
        InstallationComponent,
        NetworkFeatureComponent,
        CtaComponent,
        TestimonialComponent,
        PartnerComponent,
        FooterComponent
	],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
})
export class LandingComponent {

}
