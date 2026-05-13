import { Directive, Input, ElementRef, HostListener } from '@angular/core';

type Direction = 'up' | 'left' | 'right' | 'down' | 'upScale'

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
	@Input() direction: Direction = 'up'
	@Input() translateX: number = 0
	@Input() translateY: number = 0
	@Input() speed: number = 0.3
	private el: HTMLElement

	constructor(
		ref: ElementRef<HTMLElement>
	) {
		this.el = ref.nativeElement
	}

	@HostListener('window:scroll')
	onScroll(): void {

		this.applyParallax(window.scrollY)
	}


	private applyParallax(scrollY: number): void {
		
		const y = scrollY * this.speed
		// this.el.style.transform = `translateY(400%) translate3d(0, ${-y}px, 0.5px)`

		switch(this.direction){
			case 'up':
				this.el.style.transform = `translateY(${this.translateY}%) translate3d(0, ${-y}px, 0.5px)`
				break;
			case 'left':
				this.el.style.transform = `translate3d(${-y}px, 0, 0)`
				break;
			case 'right':
				this.el.style.transform = `translate3d(${y}px, 0, 0)`
				break;
			case 'down':
				this.el.style.transform = `translateY(${-y}px)`
				break;
		}

		// case 'left':
		// 	this.el.style.transform = `translateX(${this.translateX}%) translate3d(${-y}px, 0, 0)`
		// 	break;
		// case 'right':
		// 	this.el.style.transform = `translateX(${this.translateX}%)  translate3d(${y}px, 0, 0)`
		// 	break;
	}


}
