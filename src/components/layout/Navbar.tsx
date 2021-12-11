import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

type Props = {
  title?: string;
};

const Navbar: FC<Props> = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn btn-ghost btn-sm rounded-btn mr-2${
                  !isActive ? '' : ' btn-active'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `btn btn-ghost btn-sm rounded-btn${
                  !isActive ? '' : ' btn-active'
                }`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
};

export default Navbar;
