import { Route, Routes } from 'react-router-dom';
import { UsersPage } from 'pages/UsersPage/UsersPage';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { PrivateRoute } from './HOCs/PrivateRoute';
import { PublicRoute } from './HOCs/PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="users"
            element={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
