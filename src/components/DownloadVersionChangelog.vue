<template>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>Changelog</v-expansion-panel-title>
        <v-expansion-panel-text>
          <ul>
            <li v-for="change in changelog" :key="change">
              {{ change }}
            </li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  
  export default defineComponent({
    name: 'DownloadVersionChangelog',
    
    props: {
      changelog: {
        type: Array as PropType<string[]>,
        required: true,
      },
    },
  });
  </script>