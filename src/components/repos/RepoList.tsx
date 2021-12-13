import { FC } from 'react';
import RepoItem from './RepoItem';
import { RepoListProps } from 'types';

const RepoList: FC<RepoListProps> = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo: any) => (
          <RepoItem {...{ key: repo.id, repo }} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
