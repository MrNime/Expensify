import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ConnectedPrivateRoute from './PrivateRoute';
import ConnectedPublicRoute from './PublicRoute';
import ConnectedLoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ConnectedAddExpensePage from '../components/AddExpensePage';
import ConnectedEditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <ConnectedPublicRoute exact path="/" component={ConnectedLoginPage} />
        <ConnectedPrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <ConnectedPrivateRoute path="/create" component={ConnectedAddExpensePage} />
        <ConnectedPrivateRoute path="/edit/:id" component={ConnectedEditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
