import { Component, Input, signal, AfterViewInit, OnDestroy, OnInit } from '@angular/core';

type loaderThemeType = 'default' | 'primary'
type loaderSizeType = 'xs' | 'sm' | 'md'

@Component({
    selector: 'app-loader-spin',
    imports: [
		
    ],
    templateUrl: './loader-spin.component.html',
    styleUrl: './loader-spin.component.css',
})
export class LoaderSpinComponent implements AfterViewInit, OnInit, OnDestroy {

	@Input() loaderTheme: loaderThemeType = 'default'
	@Input() size: loaderSizeType = 'sm'

	loaderClass = signal<string>('loaderDefault')
	loaderSize = signal<loaderSizeType>('sm')

	ngOnInit(): void {
		this.loaderInit()	
	}
	ngAfterViewInit(): void {
		this.loaderInit()
	}
	ngOnDestroy(): void {
		this.loaderInit()
	}

	loaderInit() {
		switch(this.loaderTheme) {
			case 'default':
				this.loaderClass.set('loaderDefault')
				break
			case 'primary':
				this.loaderClass.set('loaderPrimary')
		}
		switch(this.size){
			case 'xs':
				this.loaderSize.set('xs')
				break
			case 'sm':
				this.loaderSize.set('sm')
				break
			case 'md':
				this.loaderSize.set('md')
				break
		}
	}
}
