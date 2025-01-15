<template>
    <v-card class="statistics-card">
      <v-card-text>
        <v-row>
          <v-col
            v-for="(stat, index) in stats"
            :key="index"
            cols="12"
            md="3"
            class="text-center py-8"
          >
            <v-scale-transition>
              <div>
                <div class="text-h2 font-weight-bold" :class="stat.color">
                  {{ stat.value }}
                </div>
                <div class="text-h6 mt-2">{{ stat.label }}</div>
                <div class="text-caption">{{ stat.subtext }}</div>
              </div>
            </v-scale-transition>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { Statistic } from '@/types/features';
  
  export default defineComponent({
    name: 'FeaturesStatisticsCard',
    props: {
      stats: {
        type: Array as PropType<Statistic[]>,
        required: true
      }
    }
  });
  </script>
  