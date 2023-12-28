import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/authSelector';

const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={'/recommended'} />
  );
};

export default PublicRoute;
