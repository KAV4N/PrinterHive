<template>
  <v-container>
    <AmbientBackground />
    <v-row class="text-center mb-8 mt-4">
      <v-col cols="12">
        <h1 class="text-h3 font-weight-bold mb-2">
          Download <span class="text-primary">PrinterHive</span>
        </h1>
        <p class="text-subtitle-1">
          Control and manage your 3D printers with our powerful server solution
        </p>
      </v-col>
    </v-row>

    <!-- Loading and Error States -->
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

    <template v-else>
      <!-- Latest Version Card -->
      <v-row v-if="latestVersion" justify="center" class="mb-8">
        <v-col cols="12" md="8">
          <v-card elevation="4">
            <v-card-item>
              <v-card-title class="text-h4">
                Latest Version {{ latestVersion.version }}
                <v-chip color="success" class="ml-2" size="small">
                  Latest
                </v-chip>
              </v-card-title>
              <v-card-subtitle class="mt-2">
                Released on {{ formatDate(latestVersion.releaseDate) }}
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <div class="mb-4">{{ latestVersion.description }}</div>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-title>Changelog</v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <ul>
                      <li v-for="change in latestVersion.changelog" :key="change">
                        {{ change }}
                      </li>
                    </ul>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>

            <v-card-actions>
              <v-row justify="center" class="pa-4">
                <v-col
                  cols="12"
                  v-for="download in latestVersion.downloads"
                  :key="download.platform"
                >
                  <v-btn
                    block
                    color="primary"
                    variant="elevated"
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
                  >
                    View Version Details
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Previous Versions -->
      <v-row v-if="previousVersions.length" class="mb-4">
        <v-col cols="12">
          <h2 class="text-h5">Previous Versions</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="6"
          v-for="version in previousVersions"
          :key="version.version"
        >
          <v-card>
            <v-card-item>
              <v-card-title>Version {{ version.version }}</v-card-title>
              <v-card-subtitle>
                Released on {{ formatDate(version.releaseDate) }}
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <div class="mb-4">{{ version.description }}</div>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-title>Changelog</v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <ul>
                      <li v-for="change in version.changelog" :key="change">
                        {{ change }}
                      </li>
                    </ul>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>

            <v-card-actions>
              <v-row justify="center" class="pa-4">
                <v-col
                  cols="12"
                  v-for="download in version.downloads"
                  :key="download.platform"
                >
                  <v-btn
                    block
                    variant="outlined"
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
                    variant="tonal"
                    prepend-icon="mdi-information"
                  >
                    View Version Details
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVersionStore } from '@/stores/version';
import AmbientBackground from '@/components/Common/AmbientBackground.vue';
import type { Version } from '@/types/version';



export default defineComponent({
  name: 'DownloadView',
  
  components: {
    AmbientBackground,
  },

  data() {
    return {
      versionStore: useVersionStore(),
    };
  },

  computed: {
    loading(): boolean {
      return this.versionStore.loading;
    },

    error(): string | null {
      return this.versionStore.error;
    },

    latestVersion(): Version | null {
      return this.versionStore.latestVersion;
    },

    previousVersions(): Version[] {
      return this.versionStore.previousVersions;
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
  },

  async created() {
    await this.versionStore.fetchVersions();
  },
});
</script>

<style scoped>
.v-card {
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-4px);
}
</style>