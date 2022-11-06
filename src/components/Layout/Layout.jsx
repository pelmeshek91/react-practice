import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

import { useMedia } from 'react-use';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMedia('(max-width: 768px)');

  const openMobileMenu = () => {
    setIsModalOpen(true);
  };
  const closeMobileMenu = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isMobile ? (
        <Button type="button" text="MENU" clickHandler={openMobileMenu} />
      ) : (
        <Header />
      )}
      {isModalOpen && isMobile && <MobileMenu closeMenu={closeMobileMenu} />}
      <Outlet />
    </>
  );
};
