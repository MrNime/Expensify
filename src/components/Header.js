import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import ConnectedUserWidget from '../components/UserWidget';

export const Header = ({ dispatchStartLogout, isAuthenticated }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        {isAuthenticated && <ConnectedUserWidget />}
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  dispatchStartLogout: () => dispatch(startLogout()),
});

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
