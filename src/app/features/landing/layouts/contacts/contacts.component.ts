import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { LucideAngularModule, MailIcon, MessagesSquareIcon, TextCursorInputIcon, SendIcon, UsersIcon } from 'lucide-angular';
import { Tooltip } from 'primeng/tooltip';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';

@Component({
	selector: 'app-contacts',
	imports: [
		ReactiveFormsModule,
		FormsModule,
		LucideAngularModule,
		CommonModule,
		Tooltip,
		EntryAnimDirective
	],
	templateUrl: './contacts.component.html',
	styleUrl: './contacts.component.css',
})
export class ContactsComponent {


	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private http: HttpClient
	){
		this.form = this.fb.group({
			fullName: ['', [
				Validators.required,
					Validators.minLength(2)
				]
			],
			poste: ['', [
				Validators.required,
					Validators.minLength(2)
				]
			],
			message: ['', [
				Validators.required,
				Validators.minLength(2)
			]],
		})
	}

	icons = {
		contact: TextCursorInputIcon,
		conversation: MessagesSquareIcon,
		mail: MailIcon,
		send: SendIcon,
		media: UsersIcon
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

	// Envoi du formulaire d'inscription à la base de données
	textSubmit = 'Envoyez'
	sending = false;
  	success = false;
  	error = false;
	
	onSubmit() {
    	if (this.form.invalid) {
      		this.form.markAllAsTouched();
			console.log("fomulaire invlide");
			// console.log(this.form.value);
			
      		return;
    	}

		console.log('Message encours ...')

		this.textSubmit = 'Encours ...'
    	this.sending = true;
    	this.success = false;
    	this.error = false;

		const  formData = { ...this.form.value };

		// contactService


		// sevirce contact pas encore disponible je vais utiliser une similation en attendant
		// =====================================================

		const url = `yann/contact/api`;
		// const url = `http://localhost:8080/ct_inscription/inscription`;

    	this.http.post(url, formData).subscribe({
      		next: () => {
        		this.sending = false;
        		this.success = true;
				this.textSubmit = 'Message envoyé'
        		this.form.reset();
				console.log('Message successful');
				
				setTimeout(() => {
					this.success = false
					this.textSubmit = 'Envoyez'
					console.clear()
				}, 3000)
      		},
      		error: () => {
        		this.sending = false;
        		this.error = true;
				this.textSubmit = 'Echec d\'envoie'
				console.log('message failed', this.sending);

				setTimeout(() => {
					this.error = false
					this.textSubmit = 'Renvoyez'
					console.clear()
				}, 3000)
      		},
    	});

	}
}
