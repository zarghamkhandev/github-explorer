interface Node {
  name: string;
  color: string;
}

interface Languages {
  nodes: Node[];
}

interface LicenseInfo {
  spdxId: string;
}

interface Edge {
  node: Repo;
}

interface Search {
  edges: Edge[];
}

export interface RepoQuery {
  search: Search;
}

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
