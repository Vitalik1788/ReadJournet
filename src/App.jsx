import { Container } from './App.styled';
import { Suspense, useEffect } from 'react';
import Spinner from './components/Spinner/Spinner';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './RestrictedRoute';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import PrivateRoute from './PrivateRoute';
import Layout from './components/Layout/Layout';
import RecommendedPage from './pages/RecommendedPage';
import Library from './pages/Library';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/authSelector';
import { userRefresh } from './redux/auth/authOperation';



function App() { 
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Layout />}>
                <Route path="/recommended" element={<RecommendedPage />} />
                <Route path="/library" element={<Library />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Container>
    )
  )    
}
export default App;
