import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './auth/login_form_container';
import RegisterFormContainer from './auth/register_form_container';
import Splash from './splash/splash';

const App = () => (
  <div>
    <Route exact path="/" component={Splash} />
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/register" component={RegisterFormContainer} />
  </div>
);

export default App;
