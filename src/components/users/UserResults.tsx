import { FC, useEffect, useContext } from 'react';
import { UserItem, Spinner } from 'components';
import GithubContext from 'context/github/GithubContext';

type UsersType = {
  id: number;
  login: string;
  avatar_url: string;
}[];

const UserResults: FC = () => {
  const { users, isLoading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();

    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {(users as UsersType).map((user) => (
        <UserItem {...{ key: user.id, user }} />
      ))}
    </div>
  );
};

export default UserResults;
