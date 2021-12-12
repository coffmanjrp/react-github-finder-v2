import { createContext, ReactNode, useReducer } from 'react';
import githubReducer from './GithubReducer';

type UsersType = {
  id: number;
  login: string;
  avatar_url: string;
}[];

type GithubContextType = {
  users: UsersType;
  isLoading: boolean;
  searchUsers: (text: string) => Promise<void>;
  clearUsers: () => void;
};

const GithubContext = createContext({} as GithubContextType);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const initialState = {
    users: [],
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

  // clear search results
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  // set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
