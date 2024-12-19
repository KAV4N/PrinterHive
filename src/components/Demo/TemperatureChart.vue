<template>
    <v-card class="ma-2">
      <v-card-title class="text-subtitle-1">Temperature Chart</v-card-title>
      <v-card-text>
        <v-chart class="chart" autoresize />
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
  
  use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
  ]);
  
  export default defineComponent({
    name: 'TemperatureChart',
    components: {
      VChart,
    },
  });
  </script>
  
  <style scoped>
  .chart {
    height: 300px;
  }
  </style>