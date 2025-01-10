export interface Version {
  version: string;
  releaseDate: string;
  description: string;
  changelog: string[];
  downloads: Download[];
}

export interface Download {
  platform: string;
  url: string;
}

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalVersions: number;
  hasMore: boolean;
}