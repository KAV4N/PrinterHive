import { defineStore } from 'pinia';
import axios from 'axios';
import type { Version, PaginationMeta } from '@/types/version';

const API_BASE_URL = 'http://localhost/api/versions.php';

export const useVersionStore = defineStore('version', {
  state: () => ({
    latestVersion: null as Version | null,
    previousVersions: [] as Version[],
    loading: false,
    loadingMore: false,
    error: null as string | null,
    currentPage: 1,
    hasMore: true,
  }),

  actions: {
    async fetchLatestVersion() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<{ data: Version }>(
          `${API_BASE_URL}?endpoint=latest`
        );
        this.latestVersion = response.data.data;
      } catch (error) {
        this.error = 'Failed to fetch latest version';
        console.error('Error fetching latest version:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPreviousVersions(page: number = 1) {
      if (page === 1) {
        this.loading = true;
        this.previousVersions = [];
      } else {
        this.loadingMore = true;
      }
      
      this.error = null;
      
      try {
        const response = await axios.get<{
          data: Version[];
          meta: PaginationMeta;
        }>(`${API_BASE_URL}?endpoint=previous&page=${page}&limit=5`);
        
        if (page === 1) {
          this.previousVersions = response.data.data;
        } else {
          this.previousVersions = [...this.previousVersions, ...response.data.data];
        }
        
        this.currentPage = response.data.meta.currentPage;
        this.hasMore = response.data.meta.hasMore;
      } catch (error) {
        this.error = 'Failed to fetch previous versions';
        console.error('Error fetching previous versions:', error);
      } finally {
        this.loading = false;
        this.loadingMore = false;
      }
    },

    async fetchVersionBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<{ data: Version }>(
          `${API_BASE_URL}?endpoint=version&slug=${slug}`
        );
        return response.data.data;
      } catch (error) {
        this.error = 'Failed to fetch version details';
        console.error('Error fetching version details:', error);
        return null;
      } finally {
        this.loading = false;
      }
    },

    async loadMore() {
      if (this.hasMore && !this.loadingMore) {
        await this.fetchPreviousVersions(this.currentPage + 1);
      }
    },
  },
});