import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { LucideAngularModule, LogInIcon, MilestoneIcon, AsteriskIcon, HouseIcon } from 'lucide-angular'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { infoApp } from '../../shared/utils/info-app';
import { SeparationComponent } from '../../shared/components/separator/separation.component';
import { LoaderSpinComponent } from '../../shared/components/loaders/loader-spin/loader-spin.component';

interface IAuthFrom {
	email: FormControl<string>
	password?: FormControl<string>
	password1?: FormControl<string>
	username?: FormControl<string>
}

@Component({
	selector: 'app-auth.component',
	imports: [
		LucideAngularModule,
		RouterModule,
		CommonModule,
		ReactiveFormsModule,
		LoaderSpinComponent
	],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

	authType = ''
	title = ''

	authForm: FormGroup<IAuthFrom>
	isSubmitting = signal(false)
	loading = signal<boolean>(false)
	destroyRef = inject(DestroyRef)

	errorMessage = null

	icons = {
		login: LogInIcon,
		register: MilestoneIcon,
		asterisk: AsteriskIcon,
		house: HouseIcon
	}

	app = signal({
		name: infoApp.name,
		logo: infoApp.logo
	})

	constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router,
		private readonly authService: AuthService
	){
		this.authForm = new FormGroup<IAuthFrom>({
      		email: new FormControl('', {
        		validators: [
					Validators.required,
					Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
				],
        		nonNullable: true,
      		}),
      		// password: new FormControl('', {
        	// 	validators: [
			// 		Validators.required,
			// 		Validators.minLength(8)
			// 	],
        	// 	nonNullable: true,
      		// }),
    	});
	}

	ngOnInit(): void {
		this.authType = this.route.snapshot.url.at(-1)!.path
		this.title = this.authType === 'login' ? 'Connectez-vous' : 'Inscrivez-vous'

		if(this.authType === 'login') {
			this.authForm.addControl(
				'password',
				new FormControl('', {
					validators: [
						Validators.required,
						Validators.minLength(8),
						// Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
					],
					nonNullable: true,
				})
			)
		}

		if(this.authType === 'register') {
			this.authForm.addControl(
				'username',
				new FormControl('', {
					validators: [
						Validators.required,
						Validators.minLength(4)
					],
					nonNullable: true
				})
			)
			this.authForm.addControl(
				'password1',
				new FormControl('', {
					validators: [
						Validators.required,
						Validators.minLength(8),
						// Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
					],
					nonNullable: true,
				})
			)
		}
	}

	submitForm(): void {
		if (this.authForm.invalid) {
			this.authForm.markAllAsTouched();
			// console.log('Formulaire invalide')
      		return;
    	}

		this.isSubmitting.set(true)
		this.loading.set(true)

		// console.log('Formulaire : ', this.authForm.value)
		console.log('Connexion ...')

		const {email, password } = this.authForm.value

		let observable =
		this.authType === 'login'
			? this.authService.login(email!, password!)
			: this.authService.register(this.authForm.value as {
				email: string;
				username: string;
				password1:string;
			})
		
		observable
			.pipe( takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (res) => {
					this.authForm.reset()
					this.loading.set(false)
					this.router.navigate([`/dist`])
				},
				error: (err) => {
					this.isSubmitting.set(false)
					this.loading.set(false)
					console.log('Erreur de connexion ')
				},
			})
	}
}
