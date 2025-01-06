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
              <span class="mr-2">{{ store.toolTemperature.toFixed(1) }}°C</span>
              <div class="text-center">
                <span class="d-block mb-1">Standby</span>  <!-- Added "Standby" label -->
                <v-text-field
                  v-model.number="toolTarget"
                  type="number"
                  density="compact"
                  hide-details
                  class="temp-input"
                  min="0"
                  max="500"
                  @change="validateToolTarget"
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
              <span class="mr-2">{{ store.bedTemperature.toFixed(1) }}°C</span>
              <v-text-field
                v-model.number="bedTarget"
                type="number"
                density="compact"
                hide-details
                class="temp-input"
                min="0"
                max="500"
                @change="validateBedTarget"
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
import { usePrinterStore } from '@/stores/printer';

export default defineComponent({
  name: 'HeaterControl',
  data() {
    return {
      toolTarget: 0,
      bedTarget: 0,
    };
  },
  setup() {
    const store = usePrinterStore();
    return { store };
  },
  mounted() {
    setInterval(() => {
      this.store.updateTemperatures();
    }, 1000);
  },
  methods: {
    validateToolTarget() {
      if (this.toolTarget < 0) this.toolTarget = 0;
      if (this.toolTarget > 500) this.toolTarget = 500;
      this.store.setToolTarget(Number(this.toolTarget));
    },
    validateBedTarget() {
      if (this.bedTarget < 0) this.bedTarget = 0;
      if (this.bedTarget > 500) this.bedTarget = 500;
      this.store.setBedTarget(Number(this.bedTarget));
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
