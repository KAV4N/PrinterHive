<template>
    <v-card class="ma-2">
      <v-card-title class="text-subtitle-1">Status</v-card-title>
      <v-card-text>
        <div class="d-flex align-center mb-2">
          <span class="mr-2">Status:</span>
          <v-chip color="success" size="small">Idle</v-chip>
          <span class="ml-4">Mode: FFF</span>
        </div>
  
        <v-table density="compact" class="status-table">
          <tbody>
            <tr>
              <td class="font-weight-bold">Tool Position</td>
              <td>
                X: 0.00<br>
                Y: 0.00<br>
                Z: 0.00
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold">Extruder Drives</td>
              <td>Drive 0: 0.0</td>
            </tr>
            <tr>
              <td class="font-weight-bold">Speeds</td>
              <td>
                Requested: 0.0 mm/s<br>
                Top: 0.0 mm/s<br>
                Flow: n/a
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold">Sensors</td>
              <td>
                Vin: 24.0 V<br>
                MCU Temp: 38.3 °C<br>
                Z-Probe: 0
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'StatusPanel',
  });
  </script>
  
  <style scoped>
  .status-table {
    font-size: 0.875rem;
  }
  </style>