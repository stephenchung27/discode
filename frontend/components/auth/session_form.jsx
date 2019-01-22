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
        <div className='form-message'>
          <h1>Welcome back!</h1>
          <h2>We're so excited to see you again!</h2>
        </div>
      )
    } else if (this.props.formType === 'register') {
      return (
        <div className='form-message'>
          <h1>Create an account</h1>
        </div>
      )
    }
  }

  requireUsername() {
    if (this.props.formType === 'register') {
      return (
        <div className='input-block'>
          <h3>USERNAME</h3>
          <input type='text' onChange={this.update('username')} />
        </div>
      )
    }
  }

  switchForms() {
    if (this.props.formType === 'login') {
      return (
        <p>
          Need an account? <Link to="/register">Register</Link>
        </p>
      )
    } else if (this.props.formType === 'register') {
      return (
        <p>
          <Link to="/login">Already have an account?</Link>
          <span className="register-disclaimer">By registering, you acknowledge that this is just a clone.</span>
        </p>
      )
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.message()}
        <div className='login-form'>
          <div className='input-block'>
            <h3>EMAIL</h3>
            <input type='text' onChange={this.update('email')} />
          </div>
          {this.requireUsername()}
          <div className='input-block'>
            <h3>PASSWORD</h3>
            <input type='password' onChange={this.update('password')} />

          </div>
          <input type='submit' value={this.props.formType === 'login' ? "Login" : "Continue"} />
        </div>
        {this.switchForms()}
      </form>
    )
  }
}

export default SessionForm;