
export interface Download {
    platform: 'Windows' | 'macOS' | 'Linux';
    url: string;
  }
  
  export interface Version {
    version: string;
    releaseDate: string;
    description: string;
    changelog: string[];
    downloads: Download[];
  }