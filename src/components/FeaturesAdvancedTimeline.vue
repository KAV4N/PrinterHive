<template>
    <v-timeline side="end" align="start">
      <v-timeline-item
        v-for="(feature, index) in features"
        :key="index"
        :dot-color="feature.color"
        size="small"
      >
        <template v-slot:opposite>
          <v-chip :color="feature.color" label class="mb-2">
            {{ feature.category }}
          </v-chip>
        </template>
        <v-card>
          <v-card-title class="d-flex align-center">
            <v-icon :color="feature.color" class="mr-2">{{ feature.icon }}</v-icon>
            {{ feature.title }}
          </v-card-title>
          <v-card-text>
            <p>{{ feature.description }}</p>
            <v-chip-group>
              <v-chip
                v-for="(tag, idx) in feature.tags"
                :key="idx"
                variant="outlined"
                size="small"
              >
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { AdvancedFeature } from '@/types/features';
  
  export default defineComponent({
    name: 'FeaturesAdvancedTimeline',
    props: {
      features: {
        type: Array as PropType<AdvancedFeature[]>,
        required: true
      }
    }
  });
  </script>