
import { defineStore } from 'pinia';
import axios from 'axios';
import type { Version } from '@/types/version';


export const useVersionStore = defineStore('version', {
  state: () => ({
    latestVersion: null as Version | null,
    previousVersions: [] as Version[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchVersions() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<{
          latestVersion: Version;
          previousVersions: Version[];
        }>('http://localhost/api/versions.php');
        
        this.latestVersion = response.data.latestVersion;
        this.previousVersions = response.data.previousVersions;
      } catch (error) {
        this.error = 'Failed to fetch version data';
      } finally {
        this.loading = false;
      }
    },
  },
});