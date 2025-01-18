export interface Version {
  latest: boolean
  version: string
  releaseDate: string
  description: string
  changelog: string[]
  downloads: Download[]
}

export interface Download {
  platform: string
  url: string
}

export interface VersionState {
  latestVersion: {
    data: Version | null
    error: string | null
  }
  previousVersions: {
    data: Version[]
    error: string | null
    currentPage: number
    hasMore: boolean
  }
  currentVersion: {
    data: Version | null
    error: string | null
  }
  initialized: boolean
  loading: boolean
}

export interface ApiResponse<T> {
  data: T
  meta?: {
    hasMore: boolean
  }
}
