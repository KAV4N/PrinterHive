<template>
    <v-container>
      <AmbientBackground />
      <v-row justify="center" class="mb-8">
        <v-col cols="12" md="8">
          <v-card elevation="4">
            <v-card-item>
              <v-card-title class="text-h4">
                Version {{ version?.version }}
                <v-chip
                  v-if="isLatest"
                  color="success"
                  class="ml-2"
                  size="small"
                >
                  Latest
                </v-chip>
              </v-card-title>
              <v-card-subtitle class="mt-2">
                Released on {{ formatDate(version?.releaseDate) }}
              </v-card-subtitle>
            </v-card-item>
  
            <v-card-text>
              <div class="mb-4">{{ version?.description }}</div>
              
              <!-- Technical Details -->
              <v-expansion-panels class="mb-6">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start icon="mdi-clipboard-list-outline"></v-icon>
                    Technical Details
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title>Version Number</v-list-item-title>
                        <v-list-item-subtitle>{{ version?.version }}</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Release Date</v-list-item-title>
                        <v-list-item-subtitle>{{ formatDate(version?.releaseDate) }}</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>File Size</v-list-item-title>
                        <v-list-item-subtitle>~45 MB</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-text>
                </v-expansion-panel>
  
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start icon="mdi-text-box-check-outline"></v-icon>
                    Changelog
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <ul class="changelog-list">
                      <li v-for="change in version?.changelog" :key="change">
                        {{ change }}
                      </li>
                    </ul>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
  
              <!-- Download Section -->
              <v-card class="mb-4" variant="outlined">
                <v-card-title class="text-h6 py-4 px-6 bg-primary-lighten-4">
                  <v-icon start>mdi-download</v-icon>
                  Download Options
                </v-card-title>
                <v-card-text class="pa-6">
                  <v-row>
                    <v-col cols="12" v-for="download in version?.downloads" :key="download.platform">
                      <v-btn
                        block
                        color="primary"
                        size="large"
                        :prepend-icon="getPlatformIcon(download.platform)"
                      >
                        Download for {{ download.platform }}
                        <template v-slot:append>
                          <v-icon end>mdi-download</v-icon>
                        </template>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
  
              <!-- Documentation Link -->
              <v-alert
                color="info"
                variant="outlined"
                border="start"
                class="mb-4"
              >
                <template v-slot:prepend>
                  <v-icon icon="mdi-book-open-variant"></v-icon>
                </template>
                Need help getting started? Check out our
                <a href="#"class="text-decoration-none">documentation</a>.
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AmbientBackground from '@/components/Common/AmbientBackground.vue';
  
  interface Download {
    platform: 'Windows' | 'macOS' | 'Linux';
    url: string;
  }
  
  interface Version {
    version: string;
    releaseDate: Date;
    description: string;
    changelog: string[];
    downloads: Download[];
  }
  
  export default defineComponent({
    name: 'VersionDetailView',
    components: {
      AmbientBackground
    },
  
    data() {
      return {
        version: null as Version | null,
        isLatest: false
      };
    },
  
    created() {
      const versionSlug = this.$route.params.slug;
      this.fetchVersionData(versionSlug as string);
    },
  
    methods: {
      async fetchVersionData(versionSlug: string) {
        this.version = {
          version: '1.2.0',
          releaseDate: new Date('2024-01-05'),
          description: 'Major update with improved printer management and real-time monitoring features.',
          changelog: [
            'Added real-time temperature monitoring with graphical display',
            'Improved printer connection stability',
            'New printer profiles management system',
            'Enhanced G-code viewer with layer preview',
            'Multiple bug fixes and performance improvements'
          ],
          downloads: [
            {
              platform: 'Windows',
              url: '/downloads/printerhive-1.2.0-win.exe'
            },
            {
              platform: 'macOS',
              url: '/downloads/printerhive-1.2.0-mac.dmg'
            },
            {
              platform: 'Linux',
              url: '/downloads/printerhive-1.2.0-linux.AppImage'
            }
          ]
        };
        this.isLatest = versionSlug === '1.2.0';
      },
  
      formatDate(date: Date | undefined): string {
        if (!date) return '';
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(date);
      },
  
      getPlatformIcon(platform: string): string {
        switch (platform) {
          case 'Windows':
            return "mdi-microsoft";
          case 'macOS':
            return "mdi-apple";
          case 'Linux':
            return "mdi-linux";
          default:
            return '';
        }
      },
    }
  });
  </script>
  
  <style scoped>
  .changelog-list {
    list-style-type: none;
    padding-left: 0;
  }
  
  .changelog-list li {
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  
  .changelog-list li:last-child {
    border-bottom: none;
  }
  </style>