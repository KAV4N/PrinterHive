<template>

  <v-container>
    <v-row>
          <v-col cols="12" md="4">
            <DemoStatusPanel />
          </v-col>
          <v-col cols="12" md="4">
            <DemoHeaterControl />
          </v-col>
          <v-col cols="12" md="4">
            <DemoTemperatureChart />
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row>
          <v-col cols="12" md="4">
            <DemoJobControl />
          </v-col>
          <v-col cols="12" md="8">
            <DemoLayerChart />
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <DemoMovementControl />
        <DemoExtrusionControl />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DemoStatusPanel from '@/components/DemoStatusPanel.vue';
import DemoHeaterControl from '@/components/DemoHeaterControl.vue';
import DemoTemperatureChart from '@/components/DemoTemperatureChart.vue';
import DemoMovementControl from '@/components/DemoMovementControl.vue';
import DemoExtrusionControl from '@/components/DemoExtrusionControl.vue';
import DemoJobControl from '@/components/DemoJobControl.vue';
import DemoLayerChart from '@/components/DemoLayerChart.vue';
import { usePrinterStore } from '@/stores/printer';

export default defineComponent({
  name: 'DemoView',
  components: {
    DemoStatusPanel,
    DemoHeaterControl,
    DemoTemperatureChart,
    DemoMovementControl,
    DemoExtrusionControl,
    DemoJobControl,
    DemoLayerChart
  },
  data() {
    return {
      activeTab: 0,
      simulationCount: 30,
      timer: null as number | null,
      printerStore: usePrinterStore()
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.printerStore.updateTemperatures();
      this.printerStore.simulatePrint(this.simulationCount);
    }, 1000);
  },
  beforeUnmount() {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }
});
</script>
