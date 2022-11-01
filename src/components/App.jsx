import { Button } from './Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/user/usersOperations';
import { UsersList } from './UserList/UsersList';
import { EmailFilterUsers } from './EmailFilterUser/EmailFilterUser';
import { selectUsers } from 'redux/user/usersSelectors';
export const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchUsers());
  };
  return (
    <>
      {users.length > 0 ? (
        <>
          <EmailFilterUsers />
          <UsersList />
        </>
      ) : (
        <Button text="Show user" type="button" clickHandler={handleClick} />
      )}
    </>
  );
};
