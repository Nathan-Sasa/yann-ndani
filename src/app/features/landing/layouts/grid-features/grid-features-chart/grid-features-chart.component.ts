import { Component, OnInit } from '@angular/core';
import { ScrollAnimDirective } from '../../../../../shared/directives/scroll-anim.directive';


type Trend = 'up' | 'down' | 'stable'

interface LiveCounter {
	value: number;
	trend: Trend;
}

@Component({
    selector: 'app-grid-features-chart',
    imports: [
		ScrollAnimDirective
    ],
    templateUrl: './grid-features-chart.component.html',
    styleUrl: './grid-features-chart.component.css',
})
export class GridFeaturesChartComponent implements OnInit {

	visitors = 115
	sales = 48
	onlineUsers = 12

	stock: LiveCounter = {
		value: 115,
		trend: 'stable'
	}

	ngOnInit(): void {
		this.simulateSalesCounter('sales', 12, 18)
		this.simulateStockCounter(this.stock, 110, 125)
	}


	simulateSalesCounter (
		key: 'visitors' | 'sales' | 'onlineUsers',
		min: number,
		max: number,
	)  {
		const update = () => {
			const change = this.randomValue()

			this[key] += change

			if(this[key] < min) {
				this[key] = min
			}

			if(this[key] > max) {
				this[key] = min
			}

			const randomDelay = this.randomSpeed()
			setTimeout(update, randomDelay)
		}
		update()
	}

	simulateStockCounter(
		counter: LiveCounter,
		min: number,
		max: number
	) {
		const update = () => {
			const change = this.randomValue()

			if (change > 0) {
				counter.trend = 'up'
			} else if (change < 0) {
				counter.trend = 'down'
			} else {
				counter.trend = 'stable'
			}

			counter.value += change;

			if(counter.value < min) {
				counter.value = min
			}
			if(counter.value > max) {
				counter.value = max
			}

			const delay = this.randomSpeed()

			setTimeout(update, delay)
		}
		update()
	}

	randomValue(): number {
		const changeValue = Math.floor(Math.random() * 3) -1
		return changeValue
	}
	randomSpeed(): number {
		const speed = Math.random() * 2000 + 500
		return speed
	}

}
