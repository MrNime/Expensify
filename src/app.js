import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 912500,
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 1250,
}));

console.log(store.getState());

store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('gas'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
