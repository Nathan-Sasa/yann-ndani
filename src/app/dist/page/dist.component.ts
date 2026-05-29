import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DistService } from '../../core/services/dist.service';
import { IUserDistCompanies, IUserDistGroup } from '../../core/interfaces/dist.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EntryAnimDirective } from '../../shared/directives/entry-anim.directive';
import {LoaderCustomComponent} from '../../shared/components/loaders/loader-custom/loader-custom.component'
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-dist',
	imports: [
		RouterModule,
		EntryAnimDirective,
		CommonModule,
		LoaderCustomComponent
	],
	templateUrl: './dist.component.html',
	styleUrl: './dist.component.css',
})
export class DistComponent implements OnInit {

	companies = signal<IUserDistCompanies[]>([])
	group_joined = signal<IUserDistGroup[]>([])

	route = inject(ActivatedRoute)
	distService = inject(DistService)

	destroyRef = inject(DestroyRef)
	protected is_company = signal<boolean>(false)
	protected is_group = signal<boolean>(false)

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
	){}

	backgroundCompaniesColor = signal<string>('')
	backgroundGroupColor = signal<string>('')


	ngOnInit(): void {
		this.loadUserDist()
	}
	
	loadUserDist(): void {
		this.distService.getUserDist()
		.pipe(takeUntilDestroyed(this.destroyRef))
		.subscribe({
			next: (res) => {
				console.log('Dist Response : ', res)
	
				// if(res.companies.length < 1 || res.group_joined.length < 1){
				// 	this.router.navigate(['/'])
				// }
	
				if (res.companies.length > 0) {
					this.companies.set(res.companies)
					this.is_company.set(true)
					this.getCompanyColor()
				}
	
				if(res.group_joined.length > 0) {
					this.group_joined.set(res.group_joined)
					this.is_group.set(true)
					this.getGroupColor()
				}
	
			}
		})
	}

	randomColor(){
		const numColor = Math.floor(Math.random() * 10)
		return numColor
	}

	getCompanyColor(): void{
		switch(this.randomColor()) {
			case 1:
				this.backgroundCompaniesColor.set('bg-purple-500')
				break
			case 2:
				this.backgroundCompaniesColor.set('bg-green-600')
				break
			case 3:
				this.backgroundCompaniesColor.set('bg-pink-800')
				break
			case 4: 
				this.backgroundCompaniesColor.set('bg-green-800')
				break
			case 5:
				this.backgroundCompaniesColor.set('bg-orange-800')
				break
			case 6:
				this.backgroundCompaniesColor.set('bg-purple-800')
				break
			case 7:
				this.backgroundCompaniesColor.set('bg-cyan-800')
				break
			case 8:
				this.backgroundCompaniesColor.set('bg-blue-600')
				break
			case 9:
				this.backgroundCompaniesColor.set('bg-fuchsia-600')
				break
			case 10:
				this.backgroundCompaniesColor.set('bg-emerald-700')
				break
			default:
				this.backgroundCompaniesColor.set('bg-clr-primary')
				break
		}
	}

	getGroupColor(): void{
		switch(this.randomColor()) {
			case 1:
				this.backgroundGroupColor.set('bg-purple-500')
				break
			case 2:
				this.backgroundGroupColor.set('bg-green-600')
				break
			case 3:
				this.backgroundGroupColor.set('bg-pink-800')
				break
			case 4: 
				this.backgroundGroupColor.set('bg-green-800')
				break
			case 5:
				this.backgroundGroupColor.set('bg-orange-800')
				break
			case 6:
				this.backgroundGroupColor.set('bg-purple-800')
				break
			case 7:
				this.backgroundGroupColor.set('bg-cyan-800')
				break
			case 8:
				this.backgroundGroupColor.set('bg-blue-600')
				break
			case 9:
				this.backgroundGroupColor.set('bg-fuchsia-600')
				break
			case 10:
				this.backgroundGroupColor.set('bg-emerald-700')
				break
			default:
				this.backgroundGroupColor.set('bg-clr-primary')
				break
		}
	}


	// disconnect(): void {
	// 	this.authService.logout()
	// }
}
