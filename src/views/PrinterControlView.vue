<template>

  <v-container>
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

        <v-row>
          <v-col cols="12" md="4">
            <job-control />
          </v-col>
          <v-col cols="12" md="8">
            <layer-chart />
          </v-col>
        </v-row>
        <MovementControl />
        <ExtrusionControl />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StatusPanel from '@/components/Demo/StatusPanel.vue';
import HeaterControl from '@/components/Demo/HeaterControl.vue';
import TemperatureChart from '@/components/Demo/TemperatureChart.vue';
import MovementControl from '@/components/Demo/MovementControl.vue';
import ExtrusionControl from '@/components/Demo/ExtrusionControl.vue';
import JobControl from '@/components/Demo/JobControl.vue';
import LayerChart from '@/components/Demo/LayerChart.vue';
import { usePrinterStore } from '@/stores/printer';

export default defineComponent({
  name: 'PrinterControlView',
  components: {
    StatusPanel,
    HeaterControl,
    TemperatureChart,
    MovementControl,
    ExtrusionControl,
    JobControl,
    LayerChart
  },
  data() {
    return {
      activeTab: 0,
      timer: null as number | null
    };
  },
  mounted() {
    const store = usePrinterStore();
    this.timer = setInterval(() => {
      store.updateTemperatures();
      store.simulatePrinting(30);
    }, 1000);
  },
  beforeUnmount() {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }
});
</script>
