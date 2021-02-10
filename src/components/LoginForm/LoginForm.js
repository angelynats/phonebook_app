import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sessionOperations from '../../redux/session/sessionOperations';

class LoginForm extends Component {
  state = { email: '', password: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          required
          autoFocus
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <hr></hr>
        <button type="submit">LOG IN</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
