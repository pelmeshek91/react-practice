import { Component } from 'react';
import { Button } from './Button/Button';
// import { User } from './User/User';
import { users } from '../Data/users';
import { UserList } from './UserList/UserList';
import { AddUserForm } from './Form/AddUserForm';
// import { Section } from './Section/Section';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    users,
    isListShown: false,
    userToUpdate: {},
  };
  clickHandler = () => {
    this.setState({ isListShown: true });
  };
  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => userId !== user.id),
    }));
  };
  changeJobStatus = userId => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (userId === user.id) {
          return {
            ...user,
            hasJob: !user.hasJob,
          };
        }
        return user;
      }),
    }));
  };
  addUser = data => {
    const newUser = { ...data, hasJob: false, id: nanoid() };
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
    }));
  };
  showUpdateForm = id => {};
  render() {
    const { isListShown, users } = this.state;

    return (
      <>
        {isListShown ? (
          <>
            <AddUserForm addUser={this.addUser} />

            <UserList
              users={users}
              deleteUser={this.deleteUser}
              changeJobStatus={this.changeJobStatus}
            />
          </>
        ) : (
          <Button
            type="button"
            text="Show uses list"
            clickHandler={this.clickHandler}
          />
        )}
      </>
    );
  }
}

/* export const App = () => {
  return (
    <>
      <Section>
        <User user={users[0]} />
      </Section>
      <Section title="UserList">
        <UserList users={users} />
      </Section>
    </>
  );
}; */
