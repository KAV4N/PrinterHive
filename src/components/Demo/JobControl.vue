<template>
    <v-card class="pa-4 ma-2">
      <v-card-title class="text-h6">
        <v-icon start>mdi-wrench</v-icon>
        Job Control
      </v-card-title>
  
      <v-btn
        v-if="!printerStore.printing"
        block
        color="primary"
        class="mb-3"
        @click="printerStore.startPrint"
      >
        <v-icon start>mdi-play</v-icon>
        Start Print
      </v-btn>
  
      <v-btn
        v-else
        block
        color="error"
        class="mb-3"
        @click="printerStore.stopPrint"
      >
        <v-icon start>mdi-stop</v-icon>
        Stop Print
      </v-btn>
    </v-card>
  </template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import { usePrinterStore } from '@/stores/printer';

  export default defineComponent({
    name: 'JobControl',
    data() {
    return {
      printerStore: usePrinterStore()
    };
  },
});
</script>