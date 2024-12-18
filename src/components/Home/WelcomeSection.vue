<template>
        <div class="text-center welcome-content my-16 py-16">
            <h1 class="text-h1 font-weight-bold welcome-title">
            Welcome to 
            <span class="text-primary">PrinterHive</span>
            </h1>

            <p class="text-h4 welcome-subtitle mt-6">
            Your All-in-One 3D Printer Management Solution
            </p>
            <div class="mt-8">
            <v-btn
                size="x-large"
                color="primary"
                variant="elevated"
                class="mr-4"
            >
                Explore Features
                <v-icon right class="ml-2">mdi-arrow-right</v-icon>
            </v-btn>

            <v-btn
                size="x-large"
                variant="outlined"
                class="ml-4"
                @click="startDemo"
            >
                Try Demo
                <v-icon right class="ml-2">mdi-play</v-icon>
            </v-btn>
            </div>


        </div>
        <v-card class="mt-16 py-4 rounded-lg mx-4">
            <v-row justify="center">
                <v-col
                v-for="stat in stats"
                :key="stat.value"
                cols="12"
                sm="4"
                class="text-center"
                >
                <div class="stat-item">
                    <div class="text-h3 font-weight-bold">{{ stat.value }}</div>
                    <div class="text-subtitle-1">{{ stat.label }}</div>
                </div>
                </v-col>
            </v-row>
            </v-card>   
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Stat {
    value: string;
    label: string;
  }
  
  export default defineComponent({
    name: 'WelcomeSection',
    
    data() {
      return {
        stats: [
          { value: '10K+', label: 'Active Users' },
          { value: '50K+', label: 'Prints Completed' },
          { value: '99.9%', label: 'Uptime' },
        ] as Stat[],
      };
    },
  
    methods: {
      startDemo(): void {
        //TODO: REDIRECT TO DEMOPAGE
     
      },
    },
  });
  </script>

  <style scoped>

  .stat-item {
    padding: 1rem;
    transition: transform 0.3s ease;
  }
  
  .stat-item:hover {
    transform: translateY(-5px);
  }

  </style>
  