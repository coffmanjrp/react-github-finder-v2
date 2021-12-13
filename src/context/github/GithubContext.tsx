import { createContext, ReactNode, useReducer } from 'react';
import githubReducer from './GithubReducer';
import { GithubContextType } from 'types';

const GithubContext = createContext({} as GithubContextType);

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
