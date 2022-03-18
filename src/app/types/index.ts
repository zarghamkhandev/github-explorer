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

interface Data {
  search: Search;
}

interface Result {
  data: Data;
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
