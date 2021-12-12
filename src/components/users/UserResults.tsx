import { FC, useEffect, useState } from 'react';
import { UserItem, Spinner } from 'components';

type UsersProps = {
  id: number;
  login: string;
  avatar_url: string;
}[];

const UserResults: FC = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    setUsers(data);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {(users as UsersProps).map((user) => (
        <UserItem {...{ key: user.id, user }} />
      ))}
    </div>
  );
};

export default UserResults;
