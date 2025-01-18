<template>
  <v-row justify="center" class="pa-4">
    <v-col cols="12" v-for="download in downloads" :key="download.platform">
      <v-btn
        block
        :color="isLatest ? 'primary' : undefined"
        :variant="isLatest ? 'elevated' : 'outlined'"
        @click="downloadVersion(download.url)"
        :prepend-icon="getPlatformIcon(download.platform)"
      >
        Download for {{ download.platform }}
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-btn
        block
        color="secondary"
        variant="outlined"
        prepend-icon="mdi-information"
        :to="`/download/${version}`"
      >
        View Version Details
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Download } from '@/types/version'

export default defineComponent({
  name: 'DownloadVersionDownloads',

  props: {
    downloads: {
      type: Array as PropType<Download[]>,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    isLatest: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    getPlatformIcon(platform: string): string {
      switch (platform) {
        case 'Windows':
          return 'mdi-microsoft'
        case 'macOS':
          return 'mdi-apple'
        case 'Linux':
          return 'mdi-linux'
        default:
          return ''
      }
    },

    downloadVersion(url: string): void {
      window.location.href = url
    },
  },
})
</script>
