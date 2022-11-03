import { Route, Routes } from 'react-router-dom';
import { UsersPage } from 'pages/UsersPage/UsersPage';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </>
  );
};
