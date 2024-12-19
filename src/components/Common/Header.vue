<template>

    <v-app-bar color="primary" prominent>
      <v-container class="d-flex ">
        <v-row align="center" justify="space-between">
        <v-toolbar-title  style="cursor: pointer" @click="$router.push('/')" class="font-weight-bold text-h5">PrinterHive</v-toolbar-title>
        
        <!-- Navigation buttons aligned horizontally -->
        <v-row v-if="$vuetify.display.mdAndUp" dense no-gutters>
          <v-btn to="/features">Features</v-btn>
          <v-btn to="/demo">Demo</v-btn>
          <v-btn to="/download">Download</v-btn>
          <v-btn to="/about">About</v-btn>

        </v-row>
      </v-row>



      <v-app-bar-nav-icon 
        variant="text" 
        @click.stop="drawer = !drawer"
        v-if="$vuetify.display.smAndDown"
      ></v-app-bar-nav-icon>
    </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in navigationItems"
          :key="item.title"
          :to="item.path"
          @click="drawer = false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script lang="ts">
export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    navigationItems: [
      {
        title: 'Features',
        path: '/features'
      },
      {
        title: 'Demo',
        path: '/demo'
      },
      
      {
        title: 'Download',
        path: '/download'
      },
      {
        title: 'About',
        path: '/about'
      }
    ]
  })
}
</script>
