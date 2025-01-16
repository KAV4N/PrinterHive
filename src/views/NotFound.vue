<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-img src="@/assets/404.png" max-width="400" class="mb-5"></v-img>
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
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'NotFound',
  data() {
    return {
      router: useRouter()
    };
  },

  computed: {
  },

  methods: {
    goHome() {
      this.router.push('/');
    },
  },
});
</script>