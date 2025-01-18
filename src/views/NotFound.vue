<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <h1 class="text-h1 font-weight-bold">404</h1>
        <h2 class="text-h2 font-weight-bold my-4">Page Not Found</h2>
        <v-btn color="primary" size="x-large" @click="goHome">
          Go to Home
          <v-icon right class="ml-2">mdi-play</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NotFound',
  data() {
    return {}
  },

  computed: {},

  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
})
</script>
