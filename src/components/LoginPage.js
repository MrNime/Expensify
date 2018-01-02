import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startFacebookLogin } from '../actions/auth';

export const LoginPage = ({ dispatchStartLogin, dispatchStartFacebookLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It&apos;s time to get your expenses under control</p>
      <button className="button box-layout__button" onClick={dispatchStartLogin}>
        Login with Google
      </button>
      <button className="button" onClick={dispatchStartFacebookLogin}>
        Login with Facebook
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  dispatchStartLogin: () => dispatch(startLogin()),
  dispatchStartFacebookLogin: () => dispatch(startFacebookLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
