<template>
    <v-container>
      <v-tabs v-model="activeTab">
        <v-tab>Control</v-tab>
        <v-tab>Print</v-tab>
      </v-tabs>
  
      <v-tabs-window v-model="activeTab">
        <v-tabs-window-item>
          <v-row>
            <v-col cols="12" md="4">
              <StatusPanel />
            </v-col>
            <v-col cols="12" md="4">
              <HeaterControl />
            </v-col>
            <v-col cols="12" md="4">
              <TemperatureChart />
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <MovementControl />
          <ExtrusionControl />
          <FanControl />
        </v-tabs-window-item>
  
        <v-tabs-window-item>
          WORK IN PROGRESS
        </v-tabs-window-item>
      </v-tabs-window>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import StatusPanel from '@/components/Demo/StatusPanel.vue';
  import HeaterControl from '@/components/Demo/HeaterControl.vue';
  import TemperatureChart from '@/components/Demo/TemperatureChart.vue';
  import MovementControl from '@/components/Demo/MovementControl.vue';
  import ExtrusionControl from '@/components/Demo/ExtrusionControl.vue';
  import FanControl from '@/components/Demo/FanControl.vue';
  
  export default defineComponent({
    name: 'PrinterControlView',
    components: {
      StatusPanel,
      HeaterControl,
      TemperatureChart,
      MovementControl,
      ExtrusionControl,
      FanControl,
    },
    data() {
      return {
        activeTab: 0,
      };
    },
  });
  </script>
  