import { Component } from 'react';
import PropTypes from 'prop-types';
import { Lable, AddUserBtn, Input } from './AddUserForm.styled';

export class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };
  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };
  handleNameInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: '',
      email: '',
    });
  };
  render() {
    const { name, email } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <Lable htmlFor={name}>
            Name:
            <Input
              name="name"
              type="text"
              value={name}
              onChange={this.handleNameInput}
            />
          </Lable>
          <br />
          <Lable htmlFor={email}>
            Email: <span>&#32;</span>
            <Input
              name="email"
              type="text"
              value={email}
              onChange={this.handleNameInput}
            />
          </Lable>
          <br />
          <AddUserBtn type="submit">Add user</AddUserBtn>
        </form>
      </>
    );
  }
}
