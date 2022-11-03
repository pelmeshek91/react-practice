import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { useMedia } from 'react-use';

export const Layout = () => {
  const isMobile = useMedia('(max-width:768px)');
  return (
    <>
      {isMobile ? <MobileMenu /> : <Header />}

      <Outlet />
    </>
  );
};
