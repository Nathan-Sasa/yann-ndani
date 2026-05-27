import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-statistic-counter',
    imports: [],
    templateUrl: './statistique-counter.component.html',
    styleUrl: './statistique-counter.component.css',
})
export class StatistiqueCounterComponent implements AfterViewInit, OnDestroy {

	@ViewChild('statsSection') statsSection!: ElementRef

	projectCount = 0
	userCount = 0
	partnerCount = 0
	satisfaction = 0

	private hasAnimated = false
	private observer!: IntersectionObserver

	// ngAfterViewInit(): void {
	// 	const alreadyPlayed = sessionStorage.getItem('statsPlayed')

	// 	if(alreadyPlayed){
	// 		this.projectCount = 170
	// 		this.userCount = 1500
	// 		this.partnerCount = 73
	// 		return
	// 	}

	// 	const observer = new IntersectionObserver((entries) => {
	// 		entries.forEach(entry => {
	// 			if(entry.isIntersecting && !this.hasAnimated) {
	// 				this.startCounters()
	// 				this.hasAnimated = true

	// 				sessionStorage.setItem('statsPlayed', 'true')
	// 			}
	// 		})
	// 	}, {
	// 		threshold: 0.5
	// 	})
	// 	observer.observe(this.statsSection.nativeElement)
	// }
	ngAfterViewInit(): void {
		this.observer = new IntersectionObserver ((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && !this.hasAnimated) {
					this.startCounters()
					this.hasAnimated = true

					this.observer.disconnect()
				}
			})
		}, {
			threshold: 0.5
		})

		this.observer.observe(this.statsSection.nativeElement)
	}

	ngOnDestroy() {
		if(this.observer) {
			this.observer.disconnect()
		}
	}

	startCounters() {
		this.animateValue(0, 170, 1500, (val) => this.projectCount = val)

		setTimeout(() => {
			this.animateValue(0, 1500, 1500, (val) => this.userCount = val)
		}, 150);

		setTimeout(() => {
			this.animateValue(0, 73, 1500, (val) => this.partnerCount = val)
		}, 350);

		setTimeout(() => {
			this.animateValue(0, 96, 1500, (val) => this.satisfaction = val)
		}, 450);
	}

	animateValue(start: number, end: number, duration: number, callback: (val: number) => void) {
		const startTime = performance.now()

		const step = (currentTime: number) => {
			const progress = Math.min((currentTime - startTime) / duration, 1)
			const value = Math.floor(progress* (end - start) + start)

			callback(value)

			if(progress < 1) {
				requestAnimationFrame(step)
			}
		}
		requestAnimationFrame(step)
	}
}
