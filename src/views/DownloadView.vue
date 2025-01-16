<template>
  <v-container>
    <AppAmbientBackground />
    
    <router-view v-if="$route.name === 'version-details'"></router-view>

    <template v-else>
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

      <!-- Latest Version Section -->
      <v-row v-if="latestVersionError" justify="center">
        <v-col cols="12" class="text-center">
          <v-alert type="error">{{ latestVersionError }}</v-alert>
        </v-col>
      </v-row>
      
      <v-row v-if="previousVersionsError" justify="center">
        <v-col cols="12" class="text-center">
          <v-alert type="error">{{ previousVersionsError }}</v-alert>
        </v-col>
      </v-row>

      <v-row v-if="latestVersionLoading && previousVersionsLoading" justify="center">
        <v-col cols="12" class="text-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-col>
      </v-row>

      <template v-else-if="latestVersion">
        <download-latest-version-card :version="latestVersion" />
      </template>

      <!-- Previous Versions Section -->
      <template v-if="previousVersions.length">
        <v-row v-if="previousVersionsError" justify="center">
          <v-col cols="12" class="text-center">
            <v-alert type="error">{{ previousVersionsError }}</v-alert>
          </v-col>
        </v-row>

        <v-row class="mb-4">
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
            <download-previous-version-card :version="version" />
          </v-col>
        </v-row>

        <v-row v-if="hasMore" justify="center" class="mt-4">
          <v-col cols="12" md="6" class="text-center">
            <v-btn
              :loading="previousVersionsLoading"
              @click="loadMore"
              color="secondary"
              variant="outlined"
            >
              Load More Versions
            </v-btn>
          </v-col>
        </v-row>

        <v-row v-if="previousVersionsLoading" justify="center" class="mt-4">
          <v-col cols="12" class="text-center">
            <v-progress-circular
              indeterminate
              color="secondary"
              size="24"
            ></v-progress-circular>
          </v-col>
        </v-row>
      </template>
    </template>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVersionStore } from '@/stores/versionStore';
import AppAmbientBackground from '@/components/AppAmbientBackground.vue';
import DownloadLatestVersionCard from '@/components/DownloadLatestVersionCard.vue';
import DownloadPreviousVersionCard from '@/components/DownloadPreviousVersionCard.vue';
import type { Version } from '@/types/version';

export default defineComponent({
  name: 'DownloadView',
  
  components: {
    AppAmbientBackground,
    DownloadLatestVersionCard,
    DownloadPreviousVersionCard,
  },

  data() {
    return {
      versionStore: useVersionStore(),
    };
  },

  computed: {
    latestVersionLoading(): boolean {
      return this.versionStore.latestVersion.request.loading;
    },

    latestVersionError(): string | null {
      return this.versionStore.latestVersion.request.error;
    },

    previousVersionsLoading(): boolean {
      return this.versionStore.previousVersions.request.loading;
    },

    previousVersionsError(): string | null {
      return this.versionStore.previousVersions.request.error;
    },

    hasMore(): boolean {
      return this.versionStore.previousVersions.hasMore;
    },

    latestVersion(): Version | null {
      return this.versionStore.latestVersion.data;
    },

    previousVersions(): Version[] {
      return this.versionStore.previousVersions.data;
    },
    currentRouteName() {
        return this.$route.name;
    }
  },

  methods: {
    loadMore() {
      this.versionStore.loadMore();
    },
  },

  mounted() {
    if (this.$route.name !== 'version-details') {
      this.versionStore.initializeVersions();
    }
  },

  watch: {
    currentRouteName(newRouteName) {
      if (newRouteName !== 'version-details' && !this.latestVersion) {
        this.versionStore.initializeVersions();
      }
    }
  }
});
</script>