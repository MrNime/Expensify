import React from 'react';
import { Route } from 'react-router-dom';
import ConnectedHeader from '../components/Header';
import Footer from '../components/Footer';

export const DualRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} // works without this line, even on refresh and url navigation
    component={props => (
      <div className="private-route">
        <ConnectedHeader />
        <main className="private-route__content">
          <Component {...props} />
        </main>
        <Footer />
      </div>
    )}
  />
);

export default DualRoute;
