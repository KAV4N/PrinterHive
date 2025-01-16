<template>
    <v-card class="ma-2 pa-4 d-flex flex-column">
      <v-card-title class="text-subtitle-1">Layer Progress</v-card-title>
      <v-card-text class="flex-grow-1 chart-container">
        <v-chart class="chart" :option="chartOption" autoresize />
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { LineChart } from 'echarts/charts';
  import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import VChart from 'vue-echarts';
  import { usePrinterStore } from '@/stores/printerStore';
  
  use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
  ]);
  
  export default defineComponent({
    name: 'DemoLayerChart',
    components: {
      VChart,
    },
    data() {
      return {
        printerStore: usePrinterStore()
      };
    },
    methods:{
      formatTime(date: Date): string {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      }
    },

    computed: {
      chartOption() {
        const now = Date.now();
        const fiveMinutesAgo = now - 5 * 60 * 1000;
  
        const currentLayer = Math.floor(this.printerStore.position.z / this.printerStore.layerHeight);
        const layerData = [];
  
        for (let i = 0; i <= currentLayer; i++) {
          layerData.push([
            now - (currentLayer - i) * 1000,
            i * this.printerStore.layerHeight,
          ]);
        }
        
        return {
          animation: false,
          tooltip: {
            trigger: 'axis',
            formatter: (params: any) => {
              const time = this.formatTime(new Date(params[0].value[0]));
              return `Time: ${time}<br/>
                      Layer Height: ${params[0].value[1].toFixed(2)}mm<br/>
                      Temperature: ${this.printerStore.toolTemperature.toFixed(1)}°C`;
            }
          },
          xAxis: {
            type: 'time',
            axisLabel: {
                formatter: (value: number) => {
                const date = new Date(value);
                return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                },
                interval: 60 * 1000, // every minute
            },
            min: fiveMinutesAgo,
            max: now,
            splitLine: {
              show: true
            }
          },
          yAxis: {
            type: 'value',
            name: 'Layer Height (mm)',
            nameLocation: 'middle',
            nameGap: 40,
            max: Math.max(currentLayer * this.printerStore.layerHeight, 1),
            axisLabel: {
                formatter: (value: number) => value.toFixed(2) 
            }
        },

          series: [{
            name: 'Layer Progress',
            type: 'line',
            data: layerData,
            smooth: true,
            showSymbol: false,
            itemStyle: {
              color: 'blue',
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(0, 0, 255, 0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(0, 0, 255, 0.1)'
                }]
              }
            }
          }]
        };
      },
    },
  });
  </script>
  
  <style scoped>
  .chart-container {
    min-height: 300px;
    position: relative;
  }
  
  .chart {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  </style>