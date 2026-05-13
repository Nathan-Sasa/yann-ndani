import { Directive, ElementRef, HostListener, Input } from '@angular/core';

type Direction = 'up' | 'left' | 'right' | 'down' | 'upScale'

@Directive({
  selector: '[appScrollSync]'
})
export class ScrollSyncDirective {

	@Input() direction: Direction = 'up'

	private el: HTMLElement
	
	constructor(
		private ref: ElementRef
	) { 
		this.el = ref.nativeElement
	}

	@HostListener('window:scroll')
	onScroll(): void {
		const p = this.progress()
		this.apply(p)
	}

	private progress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight

		return this.clamp(1 - rect.top / vh, 0, 1)
	}

	private apply(p: number): void {
		const scale = this.map(p, 0, 1, 0.8, 1)
		const opacity = this.map(p, 0, 1, 0, 1)
		const rotate = this.map(p, 0, 1, -8, 0)
		const top = this.map(p, 0, 1, 1 , 1)

		// this.el.style.opacity = opacity.toString()
		// this.el.style.transform = `scale(${scale}) rotate(${rotate}deg)`

		switch(this.direction){
			case 'up':
				this.el.style.transform = `translate3d(0, ${scale}px, 0.5px)`
				break;
			// case 'left':
			// 	this.el.style.transform = `translate3d(${-y}px, 0, 0)`
			// 	break;
			// case 'right':
			// 	this.el.style.transform = `translate3d(${y}px, 0, 0)`
			// 	break;
			// case 'down':
			// 	this.el.style.transform = `translateY(${-y}px)`
			// 	break;
		}
		// switch(this.direction){
		// 	case 'up':
		// 		this.el.style.transform = `translateY(${this.translateY}%) translate3d(0, ${-y}px, 0.5px)`
		// 		break;
		// 	case 'left':
		// 		this.el.style.transform = `translateX(${this.translateX}%) translate3d(${-y}px, 0, 0)`
		// 		break;
		// 	case 'right':
		// 		this.el.style.transform = `translateX(${this.translateX}%)  translate3d(${y}px, 0, 0)`
		// 		break;
		// 	case 'down':
		// 		this.el.style.transform = `translateY(${-y}px)`
		// 		break;
		// }
	}

	private map(
		v: number,
		inMin: number,
		inMax: number,
		outMin: number,
		outMax: number
	): number{
		return (v - inMin) * (outMax - outMin)
			/ (inMax - inMin) + outMin
	}

	private clamp(v: number, min: number, max: number) : number{
		return Math.max(min, Math.min(max, v))
	}

}
