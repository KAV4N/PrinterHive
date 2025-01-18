<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card v-bind="props" :elevation="isHovering ? 12 : 2" class="pa-6 transition-swing h-100">
      <div class="d-flex flex-column align-center">
        <v-avatar :color="value.color" size="72" class="mb-4">
          <v-icon size="36" color="white">{{ value.icon }}</v-icon>
        </v-avatar>
        <h3 class="text-h5 font-weight-bold mb-4">{{ value.title }}</h3>
        <p class="text-body-1 text-center">{{ value.description }}</p>
      </div>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { ValueProposition } from '@/types/features'

export default defineComponent({
  name: 'FeaturesValuePropositionCard',
  props: {
    value: {
      type: Object as PropType<ValueProposition>,
      required: true,
    },
  },
})
</script>
