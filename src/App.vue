<template>

  <v-app>
    <Header />
    <BVAmbientBackground />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import Header from '@/components/Common/Header.vue';
import Footer from '@/components/Common/Footer.vue';
import BVAmbientBackground from '@/components/Common/BVAmbientBackground.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    RouterView,
    BVAmbientBackground
  }
});
</script>

<style>
html, 
body {
  margin: 0;
  overflow-x: hidden;
  min-height: 100vh;
}
</style>
