import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './auth/login_form_container';
import RegisterFormContainer from './auth/register_form_container';
import Splash from './splash/splash';
import Temp from './splash/temp';
import AppView from './app/app_view';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/register" component={RegisterFormContainer} />
    <ProtectedRoute exact path="/app" component={AppView} />
    <Route exact path="/" component={Splash} />
  </Switch>
);

export default App;