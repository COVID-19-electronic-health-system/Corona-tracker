import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import { useBlockstack } from 'react-blockstack';

export default ({ path, component: Component }) => {
  const { authenticated } = useBlockstack();
  return authenticated ? <Route path={path} component={Component} /> : <Login />;
};
