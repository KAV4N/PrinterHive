<template>
  <v-footer color="surface" app>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <p>&copy; {{ new Date().getFullYear() }} PrinterHive. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>
