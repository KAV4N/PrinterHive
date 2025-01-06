import {
	defineStore
} from 'pinia';

export interface Position {
	x: number;
	y: number;
	z: number;
}

export interface TemperaturePoint {
	timestamp: number;
	value: number;
}

export interface CombinedPrinterState {
	position: Position;
	printing: boolean;
	speeds: Position;
	extruderDrive: number;
	voltage: number;
	zProbe: number;
	mcuTemperature: number;
	toolTemperature: number;
	bedTemperature: number;
	toolTarget: number;
	bedTarget: number;
	toolHistory: TemperaturePoint[];
	bedHistory: TemperaturePoint[];
	roomTemperature: number;
	currentLayer: number;
	totalLayers: number;

	layerHeight: number;
}

//TODO: SAVE TO LOCAL STORAGE

export const usePrinterStore = defineStore('printer', {
	state: (): CombinedPrinterState => ({
		position: {
			x: 0,
			y: 0,
			z: 0
		},
		printing: false,
		speeds: {
			x: 0,
			y: 0,
			z: 0
		},
		extruderDrive: 0,
		voltage: 24.0,
		zProbe: 0,
		mcuTemperature: 38.3,
		toolTemperature: 24.0,
		bedTemperature: 23.5,
		toolTarget: 0,
		bedTarget: 0,
		toolHistory: [],
		bedHistory: [],
		roomTemperature: 23.0,
		currentLayer: 0,
		totalLayers: 100,
		layerHeight: 0.2
	}),

	actions: {

		updatePosition < T extends keyof Position > (axis: T, value: number) {
			this.position[axis] += value;
		},
		resetPosition() {
			this.position = {
				x: 0,
				y: 0,
				z: 0
			};
		},

		startPrint() {
			this.printing = true;
			this.resetValues();
			this.simulatePrinting();
		},

		stopPrint() {
			this.printing = false;
			this.speeds = {
				x: 0,
				y: 0,
				z: 0
			};
		},

		resetValues() {
			this.position = {
				x: 0,
				y: 0,
				z: 0
			};
			this.speeds = {
				x: 0,
				y: 0,
				z: 0
			};
			this.extruderDrive = 0;
			this.currentLayer = 0;
		},

		simulatePrinting() {
			const duration = 30000;
			const interval = 100;
			const steps = duration / interval;
			let currentStep = 0;

			const timer = setInterval(() => {
				if (!this.printing || currentStep >= steps) {
					clearInterval(timer);
					this.stopPrint();
					return;
				}

				this.position.x += (Math.random() - 0.5) * 2;
				this.position.y += (Math.random() - 0.5) * 2;

				if (currentStep % 10 === 0) {
					this.position.z += this.layerHeight;
					this.currentLayer = Math.floor(this.position.z / this.layerHeight);
				}

				this.speeds.x = Math.abs(Math.sin(currentStep) * 50);
				this.speeds.y = Math.abs(Math.cos(currentStep) * 50);
				this.speeds.z = this.currentLayer === Math.floor(this.position.z / this.layerHeight) ? 0 : 5;

				this.extruderDrive += 0.1;

				this.toolTemperature = this.calculateNewTemperature(this.toolTemperature, 200, 2.0);
				this.bedTemperature = this.calculateNewTemperature(this.bedTemperature, 50, 1.0);

				currentStep++;
			}, interval);
		},

		setToolTarget(target: number) {
			this.toolTarget = Math.max(this.roomTemperature, target);
		},

		setBedTarget(target: number) {
			this.bedTarget = Math.max(this.roomTemperature, target);
		},

		updateTemperatures() {
			const now = Date.now();

			this.toolTemperature = this.calculateNewTemperature(
				this.toolTemperature,
				this.toolTarget,
				2.0
			);

			this.bedTemperature = this.calculateNewTemperature(
				this.bedTemperature,
				this.bedTarget,
				1.0
			);

			this.toolHistory.push({
				timestamp: now,
				value: this.toolTemperature
			});
			this.bedHistory.push({
				timestamp: now,
				value: this.bedTemperature
			});

			const fiveMinutesAgo = now - 5 * 60 * 1000;
			this.toolHistory = this.toolHistory.filter(
				point => point.timestamp > fiveMinutesAgo
			);
			this.bedHistory = this.bedHistory.filter(
				point => point.timestamp > fiveMinutesAgo
			);
		},

		calculateNewTemperature(current: number, target: number, rate: number): number {
			if (target > current) {
				return Math.min(target, current + rate);
			} else if (target < current) {
				const coolRate = rate * 0.5;
				return Math.max(
					Math.max(target, this.roomTemperature),
					current - coolRate
				);
			}
			return current + (Math.random() - 0.5) * 0.75;
		},
	},
});