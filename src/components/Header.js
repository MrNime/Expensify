import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import ConnectedUserWidget from '../components/UserWidget';

export const Header = ({ dispatchStartLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <ConnectedUserWidget />
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  dispatchStartLogout: () => dispatch(startLogout()),
});
export default connect(undefined, mapDispatchToProps)(Header);
