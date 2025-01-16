<template>
  <v-card class="ma-2 pa-4">
    <v-card-title class="text-subtitle-1">
      Machine Movement
      <v-btn 
        variant="text" 
        color="primary" 
        class="ml-4" 
        @click="homeAll"
        :disabled="isPrinting"
      >
        Home All
      </v-btn>
    </v-card-title>
    <v-card-text>
      <div class="d-flex flex-column">
        <div
          v-for="axis in axes"
          :key="axis"
          class="d-flex flex-column flex-md-row mb-4"
        >
          <v-btn
            color="warning"
            class="mb-2 w-100 w-md-auto"
            @click="homeAxis(axis)"
            :disabled="isPrinting"
          >
            Home {{ axis.toUpperCase() }}
          </v-btn>
          <div class="d-flex justify-center flex-wrap flex-grow-1">
            <template v-for="step in [100, 50, 10, 1, 0.1]" :key="`minus-${step}`">
              <v-btn
                variant="outlined"
                size="small"
                class="mx-1 my-1"
                @click="moveAxis(axis, -step)"
                :disabled="isPrinting"
              >
                {{ axis.toUpperCase() }}-{{ step }}
              </v-btn>
            </template>
            <template v-for="step in [100, 50, 10, 1, 0.1]" :key="`plus-${step}`">
              <v-btn
                variant="outlined"
                size="small"
                class="mx-1 my-1"
                @click="moveAxis(axis, step)"
                :disabled="isPrinting"
              >
                {{ axis.toUpperCase() }}+{{ step }}
              </v-btn>
            </template>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePrinterStore } from '@/stores/printerStore';

type Axis = 'x' | 'y' | 'z';

export default defineComponent({
  name: 'DemoMovementControl',
  data() {
    return {
      axes: ['x', 'y', 'z'] as Axis[],
      printerStore: usePrinterStore()
    };
  },
  computed: {
    isPrinting(): boolean {
      return this.printerStore.printing;
    }

  },
  methods: {
    moveAxis(axis: Axis, value: number) {
      if (this.isPrinting) return;
      this.printerStore.updatePosition(axis, value);
    },

    homeAxis(axis: Axis) {
      if (this.isPrinting) return;
      this.printerStore.updatePosition(axis, -this.printerStore.position[axis]);
    },

    homeAll() {
      if (this.isPrinting) return;
      this.printerStore.resetPosition();
    }
  }
});
</script>