<template>
    <v-parallax
      src="@/assets/3d-printing-hero.jpg"
      class="rounded-lg mb-16"
      height="400"
    >
      <v-row class="align-center fill-height">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2 font-weight-bold mb-4">
            <span class="text-primary">PrinterHive</span> Features
          </h1>
          <p class="text-h5">Enterprise-Grade 3D Printer Fleet Management - Now Free</p>
          <v-btn
            color="primary"
            size="x-large"
            class="mt-4"
            prepend-icon="mdi-rocket-launch"
            to="/download"
          >
            Get Started Now
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FeaturesHeroSection'
  });
  </script>
  
  