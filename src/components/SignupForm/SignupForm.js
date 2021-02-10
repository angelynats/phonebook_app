import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as sessionOperations from '../../redux/session/sessionOperations';

class SignupForm extends Component {
  state = { name: '', email: '', password: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSignup({ ...this.state });
    this.setState({
      name: '',
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
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          required
          autoFocus
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          required
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
        <button type="submit">SIGN UP</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSignup: sessionOperations.signup,
};

export default connect(null, mapDispatchToProps)(SignupForm);
