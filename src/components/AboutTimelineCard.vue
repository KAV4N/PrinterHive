<template>
  <v-timeline-item :dot-color="item.color" size="small">
    <template v-slot:opposite>
      <div class="text-h6 font-weight-bold">{{ item.year }}</div>
    </template>
    <v-card elevation="2">
      <v-card-title class="text-h6">
        {{ item.title }}
      </v-card-title>
      <v-card-text>
        {{ item.description }}
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type TimelineItem } from '@/types/timeline'

export default defineComponent({
  name: 'AboutTimelineCard',
  props: {
    item: {
      type: Object as PropType<TimelineItem>,
      required: true,
    },
  },
})
</script>
