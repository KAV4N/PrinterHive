<template>
    <v-card class="ma-2">
      <v-card-title class="text-subtitle-1">Extrusion Control</v-card-title>
      <v-card-text>
        <div class="d-flex flex-column flex-md-row align-center justify-space-between">
          <div>
            <div class="text-caption my-2">Feed amount in mm:</div>
            <div class="d-flex">
              <v-btn
                v-for="amount in [100, 50, 20, 10, 5, 1]"
                :key="amount"
                variant="outlined"
                size="small"
                class="mx-1"
              >
                {{ amount }}
              </v-btn>
            </div>
          </div>
          <div>
            <div class="text-caption my-2">Feedrate in mm/s:</div>
            <div class="d-flex">
              <v-btn
                v-for="rate in [60, 30, 15, 5, 1]"
                :key="rate"
                variant="outlined"
                size="small"
                class="mx-1"
              >
                {{ rate }}
              </v-btn>
            </div>
          </div>
          <div class="d-flex flex-column align-end mt-4 mt-md-0">
            <v-btn color="error" class="mx-1 mb-2">
              Retract
            </v-btn>
            <v-btn color="success" class="mx-1">
              Extrude
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ExtrusionControl',
  });
  </script>
  