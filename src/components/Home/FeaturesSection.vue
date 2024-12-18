<template>
    <v-container>
      <h2 class="text-h4 text-center mt-16 mb-4 text-primary">Explore Features</h2>
      <v-tabs v-model="tab" background-color="primary" dark align-with-title>
        <v-tab v-for="item in featureTabs" :key="item.title">{{ item.title }}</v-tab>
      </v-tabs>
          <v-card flat class="pa-4 ma-4 rounded-lg" v-for="item in featureTabs" :key="item.title">
            <v-row>
              <v-col cols="12" md="6">
                <v-img :src="item.image" height="300"></v-img>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center">
                <p>{{ item.description }}</p>
              </v-col>
            </v-row>
          </v-card>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FeaturesSection',
    props: {
      featureTabs: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        tab: null,
      };
    },
  });
  </script>
  