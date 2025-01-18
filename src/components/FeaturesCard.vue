<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card v-bind="props" :elevation="isHovering ? 12 : 2" class="h-100">
      <v-img :src="feature.image" height="200" cover class="align-end">
        <v-card-title class="bg-black bg-opacity-50 py-4">
          {{ feature.title }}
        </v-card-title>
      </v-img>
      <v-card-text class="pt-4">
        <p class="text-body-1">{{ feature.description }}</p>
        <v-list>
          <v-list-item
            v-for="(subFeature, idx) in feature.subFeatures"
            :key="idx"
            :title="subFeature"
            prepend-icon="mdi-check-circle"
            :color="feature.color"
            density="compact"
          ></v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { MainFeature } from '@/types/features'

export default defineComponent({
  name: 'FeaturesCard',
  props: {
    feature: {
      type: Object as PropType<MainFeature>,
      required: true,
    },
  },
})
</script>
