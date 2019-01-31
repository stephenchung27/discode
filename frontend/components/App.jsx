import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './auth/login_form_container';
import RegisterFormContainer from './auth/register_form_container';
import Splash from './splash/splash';
import AppView from './app/app_view';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { connect } from 'react-redux';
import LoadingScreen from './app/loading_screen';

const App = () => (
  <>
    <LoadingScreen />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <ProtectedRoute path="/channels/" component={AppView} />
      <Route exact path="/" component={Splash} />
    </Switch>
  </>
);


export default App;