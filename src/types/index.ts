export interface Position {
    x: number
    y: number
    z: number
  }
  
  export interface Speeds {
    requested: number
    top: number
    volumetric: string
  }
  
  export interface Sensors {
    vin: number
    mcuTemp: number
    zProbe: number
  }
  
  export interface HeaterState {
    temp: number
    active: number
    standby: number
  }
  
  export interface Heaters {
    tool0: HeaterState
    bed: HeaterState
  }