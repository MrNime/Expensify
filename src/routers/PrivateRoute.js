import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import ConnectedHeader from '../components/Header';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest} // works without this line, even on refresh and url navigation
    component={props =>
      (isAuthenticated ? (
        <div>
          <ConnectedHeader />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      ))}
  />
);
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
