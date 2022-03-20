export interface RestContributor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  contributions: number;
}

export interface Contributor {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
  bio: string;
  company: string;
  followers: Followers;
  isHireable: boolean;
  location: string;
  twitterUsername: string;
  url: string;
  websiteUrl: string;
}

interface Followers {
  totalCount: number;
}

export interface ContributorQuery {
  nodes: Contributor[];
}
