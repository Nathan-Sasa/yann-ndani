import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-angular';
import { infoApp, metadata } from '../../utils/info-app';
import { ThemeComponent } from '../theme/theme.component';

@Component({
    selector: 'app-footer',
    imports: [
		RouterModule,
		LucideAngularModule,
		ThemeComponent
	],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {


	app = {
		name: infoApp.name,
		logo: infoApp.logo
	}
	coordonnees = {
		addressMail: metadata.mail,
		phoneNumber: metadata.phone
	}

	icons = {
		location: MapPinIcon,
		phone: PhoneIcon,
		mail: MailIcon
	}

	message = {
		whatsapp: encodeURIComponent('Bonjour Yann ndani ! \n Je suis intéressé(e) par votre outils, je souhaite avoir une conversation autour de mes préoccupations. n\ Merci !'),
		mail: encodeURIComponent('Bonjour Yann ndani ! \n Je suis intéressé(e) par votre outils, je souhaite avoir une conversation autour de mes préoccupations. n\ Merci !')
	}

	mediaLink = [
		{
			name: 'Facebook',
			link: '',
			icon: 'pi pi-facebook',
			mediaClass: 'bg-blue-600! text-clr-text-dark!'
		},
		{
			name: 'LinkedIn',
			link: '',
			icon: 'pi pi-linkedin',
			mediaClass: 'bg-blue-700! text-clr-text-dark!'
		},
		{
			name: 'Twitter',
			link: '',
			icon: 'pi pi-twitter',
			mediaClass: 'bg-black! text-clr-text-dark!'
		},
		{
			name: 'Instagram',
			link: '',
			icon: 'pi pi-instagram',
			mediaClass: 'bg-no-repeat bg-linear-180! from-50% from-pink-500! to-blue-500! text-clr-text-dark! border-transparent!'
		},
		{
			name: 'Tiktok',
			link: '',
			icon: 'pi pi-tiktok',
			mediaClass: 'bg-black! text-clr-text-dark!'
		},
	]
}
