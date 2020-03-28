import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';

export default ({ path, component: Component, authed }) => {
  return authed ? <Route path={path} component={Component} /> : <Login />;
};
