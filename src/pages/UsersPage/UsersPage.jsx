import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/user/usersOperations';
import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UserList/UsersList';
import { EmailFilterUsers } from 'components/EmailFilterUser/EmailFilterUser';
import { selectUsers } from 'redux/user/usersSelectors';

export const UsersPage = () => {
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
        <Button text="Show users" type="button" clickHandler={handleClick} />
      )}
    </>
  );
};
