<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card v-bind="props" :elevation="isHovering ? 12 : 2" class="pa-6 h-100" color="primary">
      <v-card-title class="text-h4 font-weight-bold mb-4">Free Forever</v-card-title>
      <v-card-text>
        <div class="text-h3 font-weight-bold mb-4">
          $0
          <span class="text-body-1">/month</span>
        </div>
        <v-list bg-color="transparent">
          <v-list-item
            v-for="(feature, index) in features"
            :key="index"
            :title="feature"
            prepend-icon="mdi-check-circle"
          ></v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="white" class="text-primary" size="x-large">Get Started Now</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'HomePricingCard',
  props: {
    features: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
})
</script>
