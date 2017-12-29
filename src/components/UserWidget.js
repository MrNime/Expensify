import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const UserWidget = ({ dispatchStartLogout, displayName, photoURL }) => (
  <div className="user-widget">
    <img className="user-widget__image" src={`${photoURL}?sz=50`} alt={displayName} />
    <div className="user-widget__text">
      <div>{displayName}</div>
      <button className="button button--link" onClick={dispatchStartLogout}>
        Logout
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  dispatchStartLogout: () => dispatch(startLogout()),
});

const mapStateToProps = state => ({
  displayName: state.auth.displayName,
  photoURL: state.auth.photoURL,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserWidget);
