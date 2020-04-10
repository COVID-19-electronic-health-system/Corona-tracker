import React from 'react';
import { Route } from 'react-router-dom';
import { useBlockstack } from 'react-blockstack';
import PropTypes from 'prop-types';
import Login from './Login';

const PrivateRoute = props => {
  const { path, component } = props;
  const { authenticated } = useBlockstack();
  return authenticated ? <Route path={path} component={component} /> : <Login />;
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func,
};

PrivateRoute.defaultProps = {
  component: PropTypes.func,
};

export default PrivateRoute;
