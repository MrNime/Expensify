import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import ConnectedHeader from '../components/Header';
import Footer from '../components/Footer';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest} // works without this line, even on refresh and url navigation
    component={props =>
      (isAuthenticated ? (
        <div className="private-route">
          <ConnectedHeader />
          <main className="private-route__content">
            <Component {...props} />
          </main>
          <Footer />
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
