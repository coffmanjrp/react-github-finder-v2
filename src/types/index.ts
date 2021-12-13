export type NavbarProps = {
  title?: string;
};

export type RepoItemProps = {
  repo: {
    name: string;
    description: string;
    html_url: string;
    forks: string;
    open_issues: string;
    watchers_count: string;
    stargazers_count: string;
  };
};

export type RepoListProps = {
  repos: {
    name: string;
    description: string;
    html_url: string;
    forks: string;
    open_issues: string;
    watchers_count: string;
    stargazers_count: string;
  }[];
};

export type UserItemProps = {
  user: {
    login: string;
    avatar_url: string;
  };
};

export type UsersType = {
  id: number;
  login: string;
  avatar_url: string;
}[];

export type AlertContextType = {
  alert: { msg: string; type: string };
  setAlert: (msg: string, type: string) => void;
};

export type UserType = {
  name: string;
  type: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  twitter_username: string;
  login: string;
  html_url: string;
  followers: string;
  following: string;
  public_repos: string;
  public_gists: string;
  hireable: string;
};

export type RepoType = {
  name: string;
  description: string;
  html_url: string;
  forks: string;
  open_issues: string;
  watchers_count: string;
  stargazers_count: string;
};

export type GithubContextType = {
  user: UserType;
  users: UsersType;
  repos: RepoType[];
  isLoading: boolean;
  searchUsers: (text: string) => Promise<void>;
  getUser: (login: string | undefined) => Promise<void>;
  getUserRepos: (login: string | undefined) => Promise<void>;
  clearUsers: () => void;
};
