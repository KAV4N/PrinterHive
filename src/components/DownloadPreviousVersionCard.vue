<template>
    <v-card>
      <v-card-item>
        <v-card-title>Version {{ version.version }}</v-card-title>
        <v-card-subtitle>
          Released on {{ version.releaseDate }}
        </v-card-subtitle>
      </v-card-item>
  
      <v-card-text>
        <div class="mb-4">{{ version.description }}</div>
        <download-version-changelog :changelog="version.changelog" />
      </v-card-text>
  
      <v-card-actions>
        <download-version-downloads 
          :downloads="version.downloads"
          :version="version.version"
        />
      </v-card-actions>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { Version } from '@/types/version';
  import DownloadVersionChangelog from '@/components/DownloadVersionChangelog.vue';
  import DownloadVersionDownloads from '@/components/DownloadVersionDownloads.vue';

  
  export default defineComponent({
    name: 'DownloadPreviousVersionCard',
    
    components: {
        DownloadVersionChangelog,
        DownloadVersionDownloads,
    },
  
    props: {
      version: {
        type: Object as PropType<Version>,
        required: true,
      },
    },
  });
  </script>