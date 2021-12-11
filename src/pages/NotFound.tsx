import { useEffect, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Home page after 5 seconds
    setTimeout(() => {
      navigate('/');
    }, 5000);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-7">404 - Page not found!</p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
