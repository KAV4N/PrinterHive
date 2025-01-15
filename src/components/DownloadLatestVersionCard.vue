<template>
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8">
        <v-card elevation="4">
          <v-card-item>
            <v-card-title class="text-h4">
              Latest Version {{ version.version }}
              <v-chip color="success" class="ml-2" size="small">Latest</v-chip>
            </v-card-title>
            <v-card-subtitle class="mt-2">
              Released on {{ formatDate(version.releaseDate) }}
            </v-card-subtitle>
          </v-card-item>
  
          <v-card-text>
            <div class="mb-4">{{ version.description }}</div>
            <version-changelog :changelog="version.changelog" />
          </v-card-text>
  
          <v-card-actions>
            <version-downloads 
              :downloads="version.downloads"
              :version="version.version"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { Version } from '@/types/version';
  import VersionChangelog from '@/components/DownloadVersionChangelog.vue';
  import VersionDownloads from '@/components/DownloadVersionDownloads.vue';

  
  export default defineComponent({
    name: 'DownloadLatestVersionCard',
    
    components: {
      VersionChangelog,
      VersionDownloads,
    },
  
    props: {
      version: {
        type: Object as PropType<Version>,
        required: true,
      },
    },
  
    methods: {
        formatDate(date: string): string {
            return new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }).format(new Date(date));
        },
    },
  });
  </script>