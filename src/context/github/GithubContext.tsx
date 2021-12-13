import { createContext, ReactNode, useReducer } from 'react';
import githubReducer from './GithubReducer';

type UserType = {
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

type UsersType = {
  id: number;
  login: string;
  avatar_url: string;
}[];

type RepoType = {
  name: string;
  description: string;
  html_url: string;
  forks: string;
  open_issues: string;
  watchers_count: string;
  stargazers_count: string;
};

type GithubContextType = {
  user: UserType;
  users: UsersType;
  repos: RepoType[];
  isLoading: boolean;
  searchUsers: (text: string) => Promise<void>;
  getUser: (login: string | undefined) => Promise<void>;
  getUserRepos: (login: string | undefined) => Promise<void>;
  clearUsers: () => void;
};

const GithubContext = createContext({} as GithubContextType);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // get search results
  const searchUsers = async (text: string) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // get a single user
  const getUser = async (login: string | undefined) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location.href = '/notfound';
    } else {
      const data = await response.json();

      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  // get user repos
  const getUserRepos = async (login: string | undefined) => {
    setLoading();

    const params = new URLSearchParams({
      sort: 'created',
      per_page: '10',
    });
    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    });
  };

  // clear search results
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  // set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        repos: state.repos,
        isLoading: state.isLoading,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
