import { createContext, ReactNode, useState } from 'react';

type UsersType = {
  id: number;
  login: string;
  avatar_url: string;
}[];

type GithubContextType = {
  users: UsersType;
  isLoading: boolean;
  fetchUsers: () => void;
};

const GithubContext = createContext({} as GithubContextType);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    setUsers(data);
    setIsLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, isLoading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
