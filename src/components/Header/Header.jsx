import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

export const Header = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <Navigation />
      {token ? <UserMenu /> : <AuthMenu />}
    </>
  );
};
