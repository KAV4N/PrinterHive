<template>
    <v-card class="ma-2">
      <v-card-title class="text-subtitle-1">Fan Control</v-card-title>
      <v-card-text>
        <div class="d-flex align-center">
          <span class="mr-4">Part Cooling Fan:</span>
          <v-slider
            class="flex-grow-1"
            :max="100"
            :min="0"
            hide-details
          ></v-slider>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FanControl',
  });
  </script>
  