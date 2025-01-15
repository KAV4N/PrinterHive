<template>
    <v-hover v-slot="{ isHovering, props }">
      <v-card v-bind="props" :elevation="isHovering ? 12 : 2" class="pa-6 h-100">
        <div class="d-flex flex-column align-center">
          <v-icon :color="feature.color" size="64" class="mb-4">
            {{ feature.icon }}
          </v-icon>
          <h3 class="text-h5 font-weight-bold mb-4 text-center">
            {{ feature.title }}
          </h3>
          <p class="text-body-1 text-center mb-0">
            {{ feature.description }}
          </p>
        </div>
      </v-card>
    </v-hover>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { KeyFeature } from '@/types/home';
  
  export default defineComponent({
    name: 'HomeKeyFeatureCard',
    props: {
      feature: {
        type: Object as PropType<KeyFeature>,
        required: true
      }
    }
  });
  </script>