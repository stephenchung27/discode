import React from 'react';
import { withRouter } from 'react-router';
import Typed from 'typed.js'; //npm install --save typed.js
import { CSSTransitionGroup } from 'react-transition-group';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.goToRegister = this.goToRegister.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  demoLogin() {
    const email = {
      strings: ["demo@demo.com"],
      typeSpeed: 50,
    }

    const password = {
      strings: ["starwars"],
      typeSpeed: 50,
    }

    this.setState({
      email: '',
      password: ''
    });

    new Typed(".email", email);

    setTimeout(() => {
      new Typed(".password", password);
    }, 1200);

    setTimeout(() => {
      this.props.processForm({ email: "demo@demo.com", password: "starwars" });
    }, 2500); 
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
          <input required type='text' onChange={this.update('username')} className="session-input" />
        </div>
      )
    }
  }

  switchForms() {
    if (this.props.formType === 'login') {
      return (
        <p className="session-other">
          Need an account? <button onClick={this.goToRegister}>Register</button>
        </p>
      )
    } else if (this.props.formType === 'register') {
      return (
        <p className="session-other">
          <button onClick={this.goToLogin}>Already have an account?</button>
        </p>
      )
    }
  }

  goToLogin() {
    $('#session-page-wrapper form').addClass('session-form-appear-leave');
    setTimeout(() => { this.props.history.push("/login") }, 50);
  }

  goToRegister() {
    $('#session-page-wrapper form').addClass('session-form-appear-leave');
    setTimeout(() => { this.props.history.push("/register") }, 50);
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
      <div id="session-page-wrapper">
        <CSSTransitionGroup
          transitionName="session-form"
          transitionAppear={true}
          transitionAppearTimeout={125}
          transitionLeave={false}
          transitionEnter={false}>
          <form onSubmit={this.handleSubmit}>
            {this.message()}
            {this.renderErrors()}
            <div className='session-login-form'>
              <div className='session-input-block'>
                <h3>EMAIL</h3>
                <input required type='text' onChange={this.update('email')} className="session-input email" />
              </div>
              {this.requireUsername()}
              <div className='session-input-block'>
                <h3>PASSWORD</h3>
                <input required type='password' onChange={this.update('password')} className="session-input password" />

              </div>
              <input type='submit' value={this.props.formType === 'login' ? "Login" : "Continue"} className="session-button" />
              {this.props.formType === 'login' ? <button onClick={this.demoLogin} className="demo-login">Demo Login</button> : null}
            </div>
            {this.switchForms()}
          </form>
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default withRouter(SessionForm);