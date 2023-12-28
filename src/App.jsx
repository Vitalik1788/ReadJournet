import { Container } from './App.styled';
import { Suspense } from 'react';
import Spinner from './components/Spinner/Spinner';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './RestrictedRoute';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import PrivateRoute from './PrivateRoute';
import Layout from './components/Layout/Layout';
import RecommendedPage from './pages/RecommendedPage';



function App() {  

  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Layout />} >
            <Route path="/recommended" element={<RecommendedPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
export default App;
