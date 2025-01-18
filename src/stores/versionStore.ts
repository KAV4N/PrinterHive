import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import type { Version, VersionState, ApiResponse } from '@/types/version'

const API_ENDPOINTS = {
  LATEST: '/api/versions.php?endpoint=latest',
  PREVIOUS: (page: number) => `/api/versions.php?endpoint=previous&page=${page}`,
  VERSION: (slug: string) => `/api/versions.php?endpoint=version&slug=${slug}`,
} as const

const formatError = (error: any, defaultMessage: string): string => {
  if (error.response?.status === 404) return 'Version not found'
  return error.name ? `${error.name}: ${error.message}` : defaultMessage
}

export const useVersionStore = defineStore('version', {
  state: (): VersionState => ({
    latestVersion: {
      data: null,
      error: null,
    },
    previousVersions: {
      data: [],
      error: null,
      currentPage: 1,
      hasMore: false,
    },
    currentVersion: {
      data: null,
      error: null,
    },
    initialized: false,
    loading: false,
  }),

  getters: {
    isLoading(): boolean {
      return this.loading
    },

    canLoadMore(): boolean {
      return !this.loading && this.previousVersions.hasMore
    },
  },

  actions: {
    async initializeVersions() {
      if (this.initialized && this.latestVersion.data) return

      await this.fetchLatestVersion()
      if (this.previousVersions.data.length === 0) {
        await this.fetchPreviousVersions(true)
      }
      this.initialized = true
    },

    async fetchLatestVersion() {
      if (this.loading) return

      this.loading = true
      this.latestVersion.error = null

      try {
        const { data } = await axios.get<ApiResponse<Version>>(API_ENDPOINTS.LATEST)
        this.latestVersion.data = data.data
      } catch (error: any) {
        this.latestVersion.error = formatError(error, 'Failed to load latest version')
      } finally {
        this.loading = false
      }
    },

    async fetchPreviousVersions(reset = true) {
      if (this.loading) return

      if (reset) {
        this.previousVersions.data = []
        this.previousVersions.currentPage = 1
      }

      this.loading = true
      this.previousVersions.error = null

      try {
        const { data } = await axios.get<ApiResponse<Version[]>>(
          API_ENDPOINTS.PREVIOUS(this.previousVersions.currentPage),
        )

        this.previousVersions.data = reset
          ? data.data
          : [...this.previousVersions.data, ...data.data]
        this.previousVersions.hasMore = data.meta?.hasMore ?? false
      } catch (error: any) {
        this.previousVersions.error = formatError(error, 'Failed to load previous versions')
        if (!reset) this.previousVersions.currentPage--
      } finally {
        this.loading = false
      }
    },

    async fetchVersionBySlug(slug: string) {
      if (this.loading) return

      this.loading = true
      this.currentVersion.error = null
      this.currentVersion.data = null

      try {
        const { data } = await axios.get<ApiResponse<Version>>(API_ENDPOINTS.VERSION(slug))
        this.currentVersion.data = data.data
      } catch (error: any) {
        this.currentVersion.error = formatError(error, 'Failed to load version details')
      } finally {
        this.loading = false
      }
    },

    async loadMore() {
      if (!this.canLoadMore) return

      this.previousVersions.currentPage++
      await this.fetchPreviousVersions(false)
    },

    clearCurrentVersion() {
      this.currentVersion.data = null
      this.currentVersion.error = null
    },
  },
})
