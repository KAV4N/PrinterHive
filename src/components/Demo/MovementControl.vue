<template>
    <v-card class="ma-2">
      <v-card-title class="text-subtitle-1">
        Machine Movement
        <v-btn variant="text" color="primary" class="ml-4">
          Home All
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="d-flex flex-column">
          <div
            v-for="axis in ['X', 'Y', 'Z']"
            :key="axis"
            class="d-flex flex-column flex-md-row mb-4"
          >
            <v-btn color="warning" class="mb-2 w-100 w-md-auto">
              Home {{ axis }}
            </v-btn>
            <div class="d-flex justify-center flex-wrap flex-grow-1">
              <template v-for="step in [100, 50, 10, 1, 0.1]">
                <v-btn
                  variant="outlined"
                  size="small"
                  class="mx-1 my-1"
                >
                  {{ axis }}-{{ step }}
                </v-btn>
              </template>
              <template v-for="step in [100, 50, 10, 1, 0.1]">
                <v-btn
                  variant="outlined"
                  size="small"
                  class="mx-1 my-1"
                >
                  {{ axis }}+{{ step }}
                </v-btn>
              </template>
              
            </div> 

          </div>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'MovementControl',
  });
  </script>
  