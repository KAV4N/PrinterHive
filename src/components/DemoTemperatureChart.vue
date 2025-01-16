<template>
  <v-card class="ma-2 d-flex flex-column">
    <v-card-title class="text-subtitle-1">Temperature Chart</v-card-title>
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
import { type TemperaturePoint } from '@/types/printer';

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
]);

function formatTime(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

export default defineComponent({
  name: 'DemoTemperatureChart',
  components: {
    VChart,
  },
  data() {
    return {
      printerStore: usePrinterStore()
    };
  },
  computed: {
    chartOption() {
      const now = Date.now();
      const fiveMinutesAgo = now - 5 * 60 * 1000;
      
      return {
        animation: false,
        tooltip: {
          trigger: 'axis',
          formatter: (params: any) => {
            const time = formatTime(new Date(params[0].value[0]));
            return `Time: ${time}<br/>
                    Tool: ${params[0].value[1].toFixed(1)}°C<br/>
                    Bed: ${params[1].value[1].toFixed(1)}°C`;
          }
        },
        legend: {
          data: ['Tool Temperature', 'Bed Temperature']
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
          name: 'Temperature (°C)',
          nameLocation: 'middle',
          nameGap: 40,
        },
        series: [
          {
            name: 'Tool Temperature',
            type: 'line',
            data: this.printerStore.toolHistory.map((point: TemperaturePoint) => [point.timestamp, point.value]),
            smooth: true,
            showSymbol: false,
            itemStyle: {
              color: 'red', 
            },
          },
          {
            name: 'Bed Temperature',
            type: 'line',
            data: this.printerStore.bedHistory.map((point: TemperaturePoint) => [point.timestamp, point.value]),
            smooth: true,
            showSymbol: false,
            itemStyle: {
              color: 'gold', 
            },
          }
        ]
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
