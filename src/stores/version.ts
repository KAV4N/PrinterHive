import { defineStore } from 'pinia';
import axios from 'axios';
import type { Version, PaginationMeta } from '@/types/version';

export const useVersionStore = defineStore('version', {
  state: () => ({
    latestVersion: null as Version | null,
    previousVersions: [] as Version[],
    loading: false,
    loadingMore: false,
    error: null as string | null,
    currentPage: 1,
    hasMore: false
  }),

  actions: {
    async fetchLatestVersion() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://localhost/api/versions.php?endpoint=latest');
        this.latestVersion = response.data.data;
      } catch (err) {
        this.error = 'Failed to load latest version';
        console.error('Error fetching latest version:', err);
      } finally {
        this.loading = false;
      }
    },

    async fetchPreviousVersions() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          `http://localhost/api/versions.php?endpoint=previous&page=${this.currentPage}`
        );
        this.previousVersions = response.data.data;
        this.hasMore = response.data.meta.hasMore;
      } catch (err) {
        this.error = 'Failed to load previous versions';
        console.error('Error fetching previous versions:', err);
      } finally {
        this.loading = false;
      }
    },

    async fetchVersionBySlug(slug: string): Promise<Version | null> {
      try {
        const response = await axios.get(
          `http://localhost/api/versions.php?endpoint=version&slug=${slug}`
        );
        return response.data.data;
      } catch (err: any) {
        if (err.response?.status === 404) {
          return null;
        }
        throw err;
      }
    },

    async loadMore() {
      if (this.loadingMore || !this.hasMore) return;
      
      this.loadingMore = true;
      try {
        this.currentPage++;
        const response = await axios.get(
          `http://localhost/api/versions.php?endpoint=previous&page=${this.currentPage}`
        );
        this.previousVersions = [...this.previousVersions, ...response.data.data];
        this.hasMore = response.data.meta.hasMore;
      } catch (err) {
        this.currentPage--;
        console.error('Error loading more versions:', err);
      } finally {
        this.loadingMore = false;
      }
    }
  }
});