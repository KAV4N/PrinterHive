<template>
    <v-container>
      <h2 class="text-h4 text-center mb-4 text-primary">What Our Users Say</h2>
      <v-row justify="center">
        <v-col v-for="(testimonial, i) in testimonials" :key="i" cols="12" md="4">
          <v-card color="surface" class="pa-4 text-center elevation-2 rounded-lg">
            <v-avatar size="80" class="mb-4">
              <img :src="testimonial.image" alt="User" />
            </v-avatar>
            <h4 class="text-subtitle-1 font-weight-bold">{{ testimonial.name }}</h4>
            <p>{{ testimonial.comment }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsSection',
    props: {
      testimonials: Array
    }
  };
  </script>
  