import { defineStore } from 'pinia';
import axios from 'axios';
import type { Version, VersionState } from '@/types/version';

const initialRequestState = {
  loading: false,
  error: null,
};

export const useVersionStore = defineStore('version', {
  state: (): VersionState => ({
    latestVersion: {
      data: null,
      request: { ...initialRequestState },
    },
    previousVersions: {
      data: [],
      request: { ...initialRequestState },
      currentPage: 1,
      hasMore: false,
    },
    currentVersion: {
      data: null,
      request: { ...initialRequestState },
    },
  }),

  actions: {
    initializeVersions() {
      this.fetchLatestVersion();
      this.fetchPreviousVersions();
    },

    async fetchLatestVersion() {
      this.latestVersion.request.loading = true;
      this.latestVersion.request.error = null;

      try {
        const response = await axios.get<{ data: Version }>(
          '/api/versions.php?endpoint=latest'
        );
        this.latestVersion.data = response.data.data;
      } catch (error: any) {
        this.latestVersion.request.error = error.name 
          ? `${error.name}: ${error.message}`
          : 'Failed to load latest version';
      } finally {
        this.latestVersion.request.loading = false;
      }
    },

    async fetchPreviousVersions(reset = true) {
      if (reset) {
        this.previousVersions.data = [];
        this.previousVersions.currentPage = 1;
      }

      this.previousVersions.request.loading = true;
      this.previousVersions.request.error = null;

      try {
        const response = await axios.get<{ data: Version[]; meta: { hasMore: boolean } }>(
          `/api/versions.php?endpoint=previous&page=${this.previousVersions.currentPage}`
        );
        
        if (reset) {
          this.previousVersions.data = response.data.data;
        } else {
          this.previousVersions.data = [...this.previousVersions.data, ...response.data.data];
        }
        
        this.previousVersions.hasMore = response.data.meta.hasMore;
      } catch (error: any) {
        this.previousVersions.request.error = error.name 
          ? `${error.name}: ${error.message}`
          : 'Failed to load previous versions';
        if (!reset) {
          this.previousVersions.currentPage--;
        }
      } finally {
        this.previousVersions.request.loading = false;
      }
    },

    async fetchVersionBySlug(slug: string) {
      this.currentVersion.request.loading = true;
      this.currentVersion.request.error = null;
      this.currentVersion.data = null;

      try {
        const response = await axios.get<{ data: Version }>(
          `/api/versions.php?endpoint=version&slug=${slug}`
      );
        this.currentVersion.data = response.data.data;
      } catch (error: any) {
        this.currentVersion.request.error = error.response?.status === 404
          ? 'Version not found'
          : error.name 
            ? `${error.name}: ${error.message}`
            : 'Failed to load version details';
      } finally {
        this.currentVersion.request.loading = false;
      }
    },

    async loadMore() {
      if (
        this.previousVersions.request.loading || 
        !this.previousVersions.hasMore
      ) return;

      this.previousVersions.currentPage++;
      await this.fetchPreviousVersions(false);
    },

    clearCurrentVersion() {
      this.currentVersion.data = null;
      this.currentVersion.request.error = null;
    }
  }
});