<template>
  <v-app-bar color="primary" elevation="4" app>
    <v-container>
      <v-row align="center" justify="space-between">
        <v-toolbar-title  style="cursor: pointer" @click="$router.push('/')" class="font-weight-bold text-h5">PrinterHive</v-toolbar-title>
        
        <!-- Navigation buttons aligned horizontally -->
        <v-row dense no-gutters>
          <v-btn text to="/features">Features</v-btn>
          <v-btn text to="/demo">Demo</v-btn>
          <v-btn text to="/about">About</v-btn>
          <v-btn text to="/download">Download</v-btn>
        </v-row>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  name: 'Header'
};
</script>
