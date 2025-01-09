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

	mcuTemperature: number;
	toolTemperature: number;
	bedTemperature: number;

	toolTarget: number;
	bedTarget: number;

	toolHistory: TemperaturePoint[];
	bedHistory: TemperaturePoint[];

	roomTemperature: number;
	currentLayer: number;

	layerHeight: number;
    currentStep: number;
}