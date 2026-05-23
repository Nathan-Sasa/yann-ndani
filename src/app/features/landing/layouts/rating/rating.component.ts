import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { Rating } from 'primeng/rating';
import { Toast } from 'primeng/toast';
import { Message } from 'primeng/message';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-rating',
	imports: [
	FormsModule,
	ReactiveFormsModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    Rating,
	Message,
	Toast
],
	templateUrl: './rating.component.html',
	styleUrl: './rating.component.css',
	providers: [MessageService],
})
export class RatingComponent {

	visible: boolean = false;
	ratingValue: number = 4
	formSubmitted = false;

    showDialog() {
        this.visible = true;
    }

	ratingForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private messageService: MessageService
	){
		this.ratingForm = this.fb.group({
			poste: ['', [
				Validators.required,
					Validators.minLength(2)
				]
			],
			ratingContent: ['', [
				Validators.required,
				Validators.minLength(10)
			]],
			ratingNote: [undefined, [
				Validators.required
			]],
		})
	}

	textSubmit = 'Envoyez'
	sending = false;
  	success = false;
  	error = false;

	ratingSubmit(): void {
		if(this.ratingForm.invalid){
			this.ratingForm.markAllAsTouched
			this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Veillez remplir tous les champs dans le formaulaire', life: 3000 });
            this.formSubmitted = false;
			console.log('Erreur : Formulaire invalid')

			return
		}

		// sevirce rating pas encore disponible je vais utiliser une similation en attendant
		// =====================================================


		// 

		this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Votre évaluation a été envoyé', life: 3000 });

		console.log('rating value : ', this.ratingForm.value)

		setTimeout(() => {
			this.visible = false
			this.ratingForm.reset()
			console.clear()
		}, 1500)
	}

	isInvalid(controlName: string) {
        const control = this.ratingForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
}
