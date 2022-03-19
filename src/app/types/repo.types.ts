export interface Repo {
  id: string;
  name: string;
  description: string;
  stargazerCount: number;
  languages: Languages;
  licenseInfo: LicenseInfo;
  pushedAt: Date;
  updatedAt: Date;
  url: string;
}

export interface PageInfo {
  startCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  endCursor: string;
}

export interface RepoQuery {
  search: Search;
}

export interface Language {
  name: string;
  color: string;
}

interface Languages {
  nodes: Language[];
}

export interface LicenseInfo {
  spdxId: string;
}

interface Search {
  pageInfo: PageInfo;
  repositoryCount: number;
  nodes: Repo[];
}
