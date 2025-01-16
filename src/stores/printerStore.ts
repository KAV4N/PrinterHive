import {defineStore} from 'pinia';

import type {CombinedPrinterState, TemperaturePoint, Position} from "@/types/printer";


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

		mcuTemperature: 38.3,
		toolTemperature: 24.0,
		bedTemperature: 23.5,
        
		toolTarget: 0,
		bedTarget: 0,

		toolHistory: [],
		bedHistory: [],

		roomTemperature: 23.0,

		currentLayer: 0,
		layerHeight: 0.2,

        currentStep: 0

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
            this.bedTarget = 50;
            this.toolTarget = 200;
			this.resetValues();
		},

		stopPrint() {
			this.printing = false;
            this.currentStep = 0;
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
			this.currentStep = 0;
		},

		simulatePrint(steps: number) 
        {

            if (this.printing) 
            {
                if (this.currentStep >= steps)
                {
                    this.stopPrint();
                }
                else if (this.bedTemperature >= (this.bedTarget-2.5) && this.toolTemperature >= (this.toolTarget-2.5))
                {
                    this.position.x += (Math.random() - 0.5) * 2;
                    this.position.y += (Math.random() - 0.5) * 2;
        
                    if (this.currentStep % 10 === 0) {
                        this.position.z += this.layerHeight;
                        this.currentLayer = Math.floor(this.position.z / this.layerHeight);
                    }
        
                    this.speeds.x = Math.abs(Math.sin(this.currentStep) * 50);
                    this.speeds.y = Math.abs(Math.cos(this.currentStep) * 50);
                    this.speeds.z = this.currentLayer === Math.floor(this.position.z / this.layerHeight) ? 0 : 5;
        
                    this.extruderDrive += 0.1;
                    this.currentStep++;
                }
            }
		},

		setToolTarget(target: number) {
			this.toolTarget = Math.max(0, target);
		},

		setBedTarget(target: number) {
			this.bedTarget = Math.max(0, target);
		},

		updateTemperatures() {
			const now = Date.now();
		
			this.toolTemperature = this.calculateNewTemperature(
				this.toolTemperature,
				this.toolTarget,
				25.65
			);
		
			this.bedTemperature = this.calculateNewTemperature(
				this.bedTemperature,
				this.bedTarget,
				6.75
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
				(point: TemperaturePoint) => point.timestamp > fiveMinutesAgo
			);
			this.bedHistory = this.bedHistory.filter(
				(point: TemperaturePoint) => point.timestamp > fiveMinutesAgo
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