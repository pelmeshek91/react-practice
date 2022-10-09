import { User } from '../User/User';
import PropTypes from 'prop-types';

export const UserList = ({ users, deleteUser, changeJobStatus }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <User
              user={user}
              deleteUser={deleteUser}
              changeJobStatus={changeJobStatus}
            />
          </li>
        );
      })}
    </ul>
  );
};
UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
