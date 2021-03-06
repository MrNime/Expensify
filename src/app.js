import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/nl-be';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import './styles/styles.scss';

moment.locale('nl-be');
numeral.locale('nl-be');

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const { uid, displayName, photoURL } = user;
    store.dispatch(login({ uid, displayName, photoURL }));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
        return;
      }
      if (history.location.pathname === '/privacy-policy') {
        history.push('/privacy-policy');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    if (history.location.pathname === '/privacy-policy') {
      history.push('/privacy-policy');
      return;
    }
    history.push('/');
  }
});
