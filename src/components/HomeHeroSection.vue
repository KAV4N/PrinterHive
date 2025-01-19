<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-parallax height="100vh">
        <v-container class="fill-height">
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
              <div>
                <h1 class="text-h1 font-weight-bold mb-6">
                  <span class="text-primary">PrinterHive</span>
                </h1>
                <p class="text-h4 mb-8">Your All-in-One 3D Printer Management Solution</p>
                <v-btn
                  size="x-large"
                  color="primary"
                  variant="elevated"
                  class="mr-4"
                  to="/features"
                >
                  Explore Features
                  <v-icon right class="ml-2">mdi-arrow-right</v-icon>
                </v-btn>
                <v-btn size="x-large" variant="outlined" class="ml-4" to="/demo">
                  Try Demo
                  <v-icon right class="ml-2">mdi-play</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeHeroSection',
})
</script>
