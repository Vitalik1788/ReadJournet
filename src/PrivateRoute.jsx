import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from './redux/auth/authSelector';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={'/register'} />;
};

export default PrivateRoute;
