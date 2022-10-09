import { Component } from 'react';
import { Button } from './Button/Button';
// import { User } from './User/User';
import { users } from '../Data/users';
import { UserList } from './UserList/UserList';
// import { Section } from './Section/Section';

export class App extends Component {
  state = {
    users,
    isListShown: false,
  };
  clickHandler = () => {
    this.setState({ isListShown: true });
  };
  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => userId !== user.id),
    }));
  };
  render() {
    const { isListShown, users } = this.state;

    return (
      <>
        {isListShown ? (
          <UserList users={users} deleteUser={this.deleteUser} />
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
