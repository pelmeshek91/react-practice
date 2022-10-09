import PropTypes from 'prop-types';
import { Text, Value } from './User.styled';
export const User = ({ user: { name, email } }) => {
  const isViolet = email.includes('biz');

  return (
    <>
      <Text>
        Name: <Value> {name}</Value>
      </Text>
      <Text>
        Email:<Value isViolet={isViolet}>{email}</Value>
      </Text>
    </>
  );
};
User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
