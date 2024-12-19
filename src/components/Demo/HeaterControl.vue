<template>
    <v-card class="ma-2">
      <v-card-title class="d-flex align-center text-subtitle-1">
        Control Heaters
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="error">mdi-printer-3d-nozzle</v-icon>
            </template>
            <v-list-item-title>Tool 0</v-list-item-title>
            <template v-slot:append>
              <div class="d-flex align-center">
                <span class="mr-2">24.0°C</span>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="temp-input"
                ></v-text-field>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="temp-input ml-2"
                ></v-text-field>
              </div>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="info">mdi-printer-3d</v-icon>
            </template>
            <v-list-item-title>Bed</v-list-item-title>
            <template v-slot:append>
              <div class="d-flex align-center">
                <span class="mr-2">23.5°C</span>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="temp-input"
                ></v-text-field>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="temp-input ml-2"
                ></v-text-field>
              </div>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HeaterControl',
  });
  </script>
  
  <style scoped>
  .temp-input {
    width: 70px;
  }
  </style>
  