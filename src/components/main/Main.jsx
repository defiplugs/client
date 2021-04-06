import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import Settings from '../settings/Settings';

import './Main.scss';
function Main({ account }) {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route
          path="/embedded"
          component={(props) => <Settings account={account} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default Main;
