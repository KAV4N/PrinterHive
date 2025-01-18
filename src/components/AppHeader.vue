<template>
  <v-app-bar color="primary" prominent elevation="1">
    <v-container>
      <v-row align="center">
        <v-col :cols="$vuetify.display.smAndDown" class="d-flex justify-start">
          <v-toolbar-title
            style="cursor: pointer"
            @click="$router.push('/')"
            class="font-weight-bold text-h5"
          >
            PrinterHive
          </v-toolbar-title>
        </v-col>

        <v-col v-if="$vuetify.display.mdAndUp" cols="6" class="d-flex justify-center">
          <v-row dense no-gutters justify="center">
            <v-btn v-for="item in navigationItems" :key="item.title" :to="item.path">
              {{ item.title }}
            </v-btn>
          </v-row>
        </v-col>

        <v-col :cols="$vuetify.display.smAndDown" class="d-flex justify-end align-center">
          <v-switch
            v-if="$vuetify.display.mdAndUp"
            :model-value="themeStore?.isLight"
            @update:model-value="toggleTheme"
            hide-details
            inset
          >
            <template v-slot:prepend>
              <v-icon :icon="themeStore?.isLight ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
            </template>
          </v-switch>

          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
            v-if="$vuetify.display.smAndDown"
          ></v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.path"
        @click="drawer = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-switch
          :model-value="themeStore?.isLight"
          @update:model-value="toggleTheme"
          hide-details
          inset
        >
          <template v-slot:prepend>
            <v-icon :icon="themeStore?.isLight ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
          </template>
        </v-switch>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { useThemeStore } from '@/stores/themeStore'

export default {
  name: 'AppHeader',
  data: () => ({
    drawer: false,
    navigationItems: [
      { title: 'Features', path: '/features' },
      { title: 'Demo', path: '/demo' },
      { title: 'Download', path: '/download' },
      { title: 'About', path: '/about' },
    ],
    themeStore: useThemeStore(),
  }),
  created() {
    this.updateVuetifyTheme()
  },
  methods: {
    updateVuetifyTheme() {
      const themeName = this.themeStore.isLight ? 'LightPrinterHiveTheme' : 'PrinterHiveTheme'
      this.$vuetify.theme.global.name = themeName
    },
    toggleTheme() {
      this.themeStore.toggleTheme()
      this.updateVuetifyTheme()
    },
  },
}
</script>
