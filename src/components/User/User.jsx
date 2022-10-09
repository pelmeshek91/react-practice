import PropTypes from 'prop-types';
import { Text, Value } from './User.styled';
export const User = ({
  user: { name, email, id, hasJob },
  changeJobStatus,
  deleteUser,
}) => {
  const isViolet = email.includes('biz');

  return (
    <>
      <Text>
        Name: <Value> {name}</Value>
      </Text>
      <Text>
        Email:<Value isViolet={isViolet}>{email}</Value>
      </Text>
      <Text>
        Has job:
        <span>{hasJob.toString()}</span>
      </Text>
      <button onClick={() => changeJobStatus(id)}>Change job status</button>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </>
  );
};
User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
