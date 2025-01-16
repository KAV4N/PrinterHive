<template>
    <v-container >
      <v-row v-if="loading" justify="center">
        <v-col cols="12" class="text-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-col>
      </v-row>
  
      <v-row v-else-if="error" justify="center">
        <v-col cols="12" class="text-center">
          <v-alert type="error">{{ error }}</v-alert>
        </v-col>
      </v-row>
  
      <template v-else-if="version">
        <v-row>
          <v-col cols="12">
            <v-btn
              color="secondary"
              variant="text"
              :to="{ name: 'download' }"
              prepend-icon="mdi-arrow-left"
            >
              Back to Downloads
            </v-btn>
          </v-col>
        </v-row>
  
        <v-row justify="center" class="mt-4">
          <v-col cols="12" md="8">
            <v-card class="pa-4">
              <v-card-item>
                <v-card-title class="text-h4">
                  Version {{ version.version }}
                  <v-chip
                    v-if="isLatestVersion"
                    color="success"
                    class="ml-2"
                    size="small"
                  >
                    Latest
                  </v-chip>
                </v-card-title>
                <v-card-subtitle class="mt-2">
                  Released on {{ version.releaseDate }}
                </v-card-subtitle>
              </v-card-item>
  
              <v-card-text>
                <div class="mb-6">
                  <h3 class="text-h6 mb-2">Description</h3>
                  <p>{{ version.description }}</p>
                </div>
  
                <div class="mb-6">
                  <h3 class="text-h6 mb-2">Changelog</h3>
                  <ul>
                    <li
                      v-for="(change, index) in version.changelog"
                      :key="index"
                      class="mb-2"
                    >
                      {{ change }}
                    </li>
                  </ul>
                </div>
  
                <div>
                  <h3 class="text-h6 mb-4">Downloads</h3>
                  <v-row>
                    <v-col
                      cols="12"
                      md="4"
                      v-for="download in version.downloads"
                      :key="download.platform"
                    >
                      <v-card variant="outlined">
                        <v-card-item>
                          <v-card-title>
                            <v-icon
                              :icon="getPlatformIcon(download.platform)"
                              class="mr-2"
                            ></v-icon>
                            {{ download.platform }}
                          </v-card-title>
                        </v-card-item>
                        <v-card-actions>
                          <v-btn
                            block
                            color="primary"
                            variant="tonal"
                            @click="downloadVersion(download.url)"
                          >
                            Download
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </template>
  
  <script lang="ts">
 import { defineComponent } from 'vue';
import { useVersionStore } from '@/stores/versionStore';
import type { Version } from '@/types/version';

export default defineComponent({
  name: 'DownloadVersionDetailsView',

  data() {
    return {
      versionStore: useVersionStore()
    }
  },

  computed: {
    version(): Version | null {
      return this.versionStore.currentVersion.data;
    },
    loading(): boolean {
      return this.versionStore.currentVersion.request.loading;
    },
    error(): string | null {
      return this.versionStore.currentVersion.request.error;
    },
    isLatestVersion(): boolean {
      return this.versionStore.currentVersion.data?.latest ? true : false;
    }
  },

  methods: {

    getPlatformIcon(platform: string): string {
      switch (platform) {
        case 'Windows':
          return 'mdi-microsoft';
        case 'macOS':
          return 'mdi-apple';
        case 'Linux':
          return 'mdi-linux';
        default:
          return '';
      }
    },

    downloadVersion(url: string): void {
      window.location.href = url;
    },

    loadVersionDetails() {
      const slug = this.$route.params.slug as string;
      this.versionStore.fetchVersionBySlug(slug);
    },
  },

  created() {
    this.loadVersionDetails();
  },

  beforeUnmount() {
    this.versionStore.clearCurrentVersion();
  }
});
</script>