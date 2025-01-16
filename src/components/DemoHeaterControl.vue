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
              <span class="mr-2">{{ printerStore.toolTemperature.toFixed(1) }}°C</span>
              <div class="text-center">
                <v-text-field
                  :model-value="printerStore.toolTarget"
                  type="number"
                  density="compact"
                  hide-details
                  class="temp-input"
                  min="0"
                  max="500"
                  @update:model-value="updateToolTarget"
                  :disabled="isPrinting"
                ></v-text-field>
              </div>
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
              <span class="mr-2">{{ printerStore.bedTemperature.toFixed(1) }}°C</span>
              <v-text-field
                :model-value="printerStore.bedTarget"
                type="number"
                density="compact"
                hide-details
                class="temp-input"
                min="0"
                max="500"
                @update:model-value="updateBedTarget"
                :disabled="isPrinting"
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
import { usePrinterStore } from '@/stores/printerStore';

export default defineComponent({
  name: 'DemoHeaterControl',
  data() {
    return {
      printerStore: usePrinterStore()
    };
  },
  computed: {
    isPrinting(): boolean {
      return this.printerStore.printing;
    }
  },
  methods: {
    updateToolTarget(value: string) {
      let numValue = Number(value);
      if (isNaN(numValue)) numValue = 0;
      if (numValue < 0) numValue = 0;
      if (numValue > 500) numValue = 500;
      this.printerStore.setToolTarget(numValue);
    },
    updateBedTarget(value: string) {
      let numValue = Number(value);
      if (isNaN(numValue)) numValue = 0;
      if (numValue < 0) numValue = 0;
      if (numValue > 500) numValue = 500;
      this.printerStore.setBedTarget(numValue);
    },
  },
});
</script>

<style scoped>
.temp-input {
  width: 100px;
}
.text-center {
  text-align: center;
}
</style>