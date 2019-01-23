import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  message() {
    if (this.props.formType === 'login') {
      return (
        <div className='session-form-message'>
          <h1>Welcome back!</h1>
          <h2>We're so excited to see you again!</h2>
        </div>
      )
    } else if (this.props.formType === 'register') {
      return (
        <div className='session-form-message'>
          <h1>Create an account</h1>
        </div>
      )
    }
  }

  requireUsername() {
    if (this.props.formType === 'register') {
      return (
        <div className='session-input-block'>
          <h3>USERNAME</h3>
          <input type='text' onChange={this.update('username')} className="session-input" />
        </div>
      )
    }
  }

  switchForms() {
    if (this.props.formType === 'login') {
      return (
        <p className="session-other">
          Need an account? <Link to="/register">Register</Link>
        </p>
      )
    } else if (this.props.formType === 'register') {
      return (
        <p className="session-other">
          <Link to="/login">Already have an account?</Link>
        </p>
      )
    }
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, index) => (
          <li key={index}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="session-page-wrapper">
        <form onSubmit={this.handleSubmit}>
          {this.message()}
          {this.renderErrors()}
          <div className='session-login-form'>
            <div className='session-input-block'>
              <h3>EMAIL</h3>
              <input type='text' onChange={this.update('email')} className="session-input" />
            </div>
            {this.requireUsername()}
            <div className='session-input-block'>
              <h3>PASSWORD</h3>
              <input type='password' onChange={this.update('password')} className="session-input" />

            </div>
            <input type='submit' value={this.props.formType === 'login' ? "Login" : "Continue"} className="session-button" />
          </div>
          {this.switchForms()}
        </form>
      </div>
    )
  }
}

export default SessionForm;