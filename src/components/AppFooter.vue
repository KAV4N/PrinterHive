<template>
  <v-footer class="bg-surface py-8">
    <v-container>
      <h3>PrinterHive</h3>
      <v-row class="mt-8 pt-8 border-t">
        <v-col cols="12" sm="6" class="text-center text-sm-start">
          <div class="text-body-2">
            © {{ currentYear }} PrinterHive. All rights reserved.
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="text-center text-sm-end">
          <v-btn
            v-for="item in socialLinks"
            :key="item.icon"
            :aria-label="`Link to ${item.icon.replace('mdi-', '').toUpperCase()}`"
            variant="text"
            size="small"
            class="mx-1"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
export default {
  name: 'AppFooter',

  data() {
    return {
      socialLinks: [
        { icon: 'mdi-github' },
        { icon: 'mdi-twitter' },
        { icon: 'mdi-instagram' },
        { icon: 'mdi-youtube' }
      ]
    }
  },

  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.border-t {
  border-top: 1px solid rgba(158, 158, 158, 0.12);
}
</style>
