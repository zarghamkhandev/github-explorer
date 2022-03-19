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

interface Edge {
  node: Repo;
}

interface Search {
  edges: Edge[];
}
