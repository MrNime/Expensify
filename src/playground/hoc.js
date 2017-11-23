import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    {props.isAdmin ? (
      <p>the info is: {props.info}</p>
    ) : (
      <p>Details are only visible for administrators.</p>
    )}
  </div>
);

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && <p>This is private info. Please don't share.</p>}
    <WrappedComponent {...props} />
  </div>
);

const requireAuthentication = WrappedComponent => props => (
  <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in</p>}</div>
);

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin info="these are the details" />, document.getElementById('app'));
ReactDOM.render(
  <AuthInfo isAuthenticated isAdmin info="these are the details" />,
  document.getElementById('app'),
);
