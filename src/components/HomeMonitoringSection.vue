<template>
    <v-row align="center">
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-card class="pa-4" elevation="8">
          <v-sheet class="pa-4" rounded>
            <div class="d-flex align-center mb-4">
              <div class="temperature-graph flex-grow-1">
                <v-sparkline
                  :value="temperatureData"
                  :gradient="['#FF0000', '#FF8A00']"
                  stroke-linecap="round"
                  gradient-direction="top"
                  line-width="2"
                  padding="4"
                  height="100"
                ></v-sparkline>
              </div>
              <div class="temperature-stats px-4">
                <div class="text-h4 font-weight-bold">205°C</div>
                <div class="text-caption">Nozzle Temp</div>
              </div>
            </div>
            <v-progress-linear v-model="printProgress" height="20" color="primary" striped>
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}% Complete</strong>
              </template>
            </v-progress-linear>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" order="1" order-md="2" class="pa-8">
        <h2 class="text-h4 font-weight-bold mb-4">Real-Time Monitoring</h2>
        <p class="text-body-1 mb-6">
          Keep track of every detail with advanced monitoring capabilities. Monitor
          temperatures, view live camera feeds, and track print progress in real-time.
        </p>
        <v-list>
          <v-list-item
            v-for="(feature, index) in features"
            :key="index"
            :title="feature"
            prepend-icon="mdi-check-circle"
            color="success"
          ></v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType} from 'vue';
  
  export default defineComponent({
    name: 'HomeMonitoringSection',
    props: {
      temperatureData: {
        type: Array as PropType<number[]>,
        required: true
      },
      printProgress: {
        type: Number,
        required: true
      },
      features: {
        type: Array as PropType<string[]>,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  .temperature-graph {
    height: 100px;
  }
  </style>