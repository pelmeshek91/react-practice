import { AddBookPage } from 'pages/AddBookPage/AddBookPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="addbook" element={<AddBookPage />} />
        </Route>
      </Routes>
    </>
  );
};
