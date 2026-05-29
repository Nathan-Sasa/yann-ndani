import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { LoaderCustomComponent } from '../../../shared/components/loaders/loader-custom/loader-custom.component'

@Component({
    selector: 'app-logout',
    imports: [
      LoaderCustomComponent
    ],
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.css',
})
export class LogoutComponent implements OnInit {

	authService = inject(AuthService)

	ngOnInit(): void {
		this.authService.logout()
	}
}
