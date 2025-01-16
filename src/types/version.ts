export interface Version {
  latest: boolean;
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

export interface RequestState {
  loading: boolean;
  error: string | null;
}

export interface VersionState {
  latestVersion: {
    data: Version | null;
    request: RequestState;
  };
  previousVersions: {
    data: Version[];
    request: RequestState;
    currentPage: number;
    hasMore: boolean;
  };
  currentVersion: {
    data: Version | null;
    request: RequestState;
  };
}