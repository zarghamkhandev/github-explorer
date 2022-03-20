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
  cursor: string;
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
  edges: Edge[];
}

interface Edge {
  node: Repo;
  cursor: string;
}

export interface Pagination {
  cursor: number;
  direction: 1 | -1;
  remainingItems: number;
}
