import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  user: {
    login: string;
    avatar_url: string;
  };
};

const UserItem: FC<Props> = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt={login} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/users/${login}`}
            className="text-base-content text-opacity-40"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
