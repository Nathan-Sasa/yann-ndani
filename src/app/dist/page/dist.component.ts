import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dist',
	imports: [
		
	],
	templateUrl: './dist.component.html',
	styleUrl: './dist.component.css',
})
export class DistComponent {


	constructor(
		private readonly authService: AuthService,
		private readonly router: Router
	){}


	disconnect(): void {
		this.authService.logout()
	}
}
