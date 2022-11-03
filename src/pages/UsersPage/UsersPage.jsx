import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/user/usersOperations';
import { selectUsers } from 'redux/user/usersSelectors';
import { EmailFilterUsers } from 'components/EmailFilterUser/EmailFilterUser';
import { UsersList } from 'components/UserList/UsersList';
import { Button } from 'components/Button/Button';

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
        <Button text="Show user" type="button" clickHandler={handleClick} />
      )}
    </>
  );
};
