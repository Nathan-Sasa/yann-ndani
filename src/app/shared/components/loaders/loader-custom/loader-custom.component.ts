import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';

type loaderCustomSize = 'sm' | 'lg' | 'full'

@Component({
	selector: 'app-loader-custom',
	imports: [

	],
	templateUrl: './loader-custom.component.html',
	styleUrl: './loader-custom.component.css',
})
export class LoaderCustomComponent implements OnInit, OnDestroy {

	@Input() size: loaderCustomSize = 'full'
	loaderCustomSize = signal<loaderCustomSize>('full')

	ngOnInit(): void {
		this.LoaderCustomInit()
	}

	ngOnDestroy(): void {
		this.LoaderCustomInit()
	}

	LoaderCustomInit(): void {
		switch (this.size) {
			case 'sm':
				this.loaderCustomSize.set('sm')
				break;

			case 'lg':
				this.loaderCustomSize.set('lg')
				break;

			case 'full':
				this.loaderCustomSize.set('full')
				break;
		
			default:
				break;
		}
	}

}
