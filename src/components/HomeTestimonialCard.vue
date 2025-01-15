<template>
    <v-card class="mx-4" width="400" elevation="4">
      <v-card-text class="pa-6">
        <div class="d-flex align-center mb-4">
          <v-avatar color="primary" size="48" class="mr-4">
            <span class="text-h6">{{ testimonial.name.charAt(0) }}</span>
          </v-avatar>
          <div>
            <div class="text-h6">{{ testimonial.name }}</div>
            <div class="text-caption">{{ testimonial.role }}</div>
          </div>
        </div>
        <p class="text-body-1 mb-4">{{ testimonial.content }}</p>
        <v-rating
          :model-value="5"
          color="amber"
          density="compact"
          readonly
          size="small"
        ></v-rating>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { Testimonial } from '@/types/home';
  
  export default defineComponent({
    name: 'HomeTestimonialCard',
    props: {
      testimonial: {
        type: Object as PropType<Testimonial>,
        required: true
      }
    }
  });
  </script>