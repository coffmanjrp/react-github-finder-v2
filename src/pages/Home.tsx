import { FC } from 'react';
import { UserResults, UserSearch } from 'components';

const Home: FC = () => {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
};

export default Home;
