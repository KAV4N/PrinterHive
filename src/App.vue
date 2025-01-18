<template>
  <v-app>
    <AppHeader />
    <v-main>
      <RouterView />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppAmbientBackground from '@/components/AppAmbientBackground.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppAmbientBackground,
  },
})
</script>

<style>
html,
body {
  margin: 0;
  overflow-x: hidden;
  min-height: 100vh;
}
</style>
