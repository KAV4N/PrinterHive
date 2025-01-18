<template>
  <v-card elevation="8" class="overflow-hidden">
    <v-row no-gutters>
      <v-col cols="12" md="6" class="pa-8">
        <h2 class="text-h4 font-weight-bold mb-4">Powerful Dashboard</h2>
        <p class="text-body-1 mb-6">
          Monitor all your printers in real-time with our intuitive dashboard. Track temperatures,
          progress, and status at a glance.
        </p>
        <v-list select-strategy="classic">
          <v-list-item
            v-for="(feature, index) in features"
            :key="index"
            :prepend-icon="feature.icon"
            :title="feature.title"
            :subtitle="feature.subtitle"
          ></v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { DashboardFeature } from '@/types/home'

export default defineComponent({
  name: 'DashboardPreview',
  props: {
    features: {
      type: Array as PropType<DashboardFeature[]>,
      required: true,
    },
  },
})
</script>
