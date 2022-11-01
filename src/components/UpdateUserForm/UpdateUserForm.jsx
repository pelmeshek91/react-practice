import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/user/usersOperations';

export const UpdateUserForm = ({ user, closeForm }) => {
  const [companyName, setCompanyName] = useState(user.company);
  const dispatch = useDispatch();
  const updateCompany = e => {
    const { value } = e.target;
    setCompanyName(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateUser({ ...user, company: companyName }));
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{user.name}</p>
      <label>
        Company:
        <input
          type="text"
          name="company"
          value={companyName}
          onChange={updateCompany}
        />
      </label>
      <button>Update</button>
    </form>
  );
};
