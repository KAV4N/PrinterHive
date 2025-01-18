<template>
  <v-switch
    v-model="isDark"
    :label="isDark ? 'Dark Mode' : 'Light Mode'"
    color="primary"
    hide-details
    inset
    @change="toggleTheme"
  >
    <template v-slot:prepend>
      <v-icon :icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'" />
    </template>
  </v-switch>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      isDark: false
    }
  },
  created() {
    // Initialize theme based on user's stored preference or system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      this.isDark = savedTheme === 'dark'
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.applyTheme()
      // Save user preference
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    },
    applyTheme() {
      this.$vuetify.theme.global.name = this.isDark ? 'dark' : 'light'
    }
  }
}
</script>