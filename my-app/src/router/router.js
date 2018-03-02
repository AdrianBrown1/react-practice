import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { home, additem } from '../constants/routes';
import dashboard from '../containers/dash-board-container/dash-board-container';
import addItemDashboard from '../containers/add-item-dashboard-container/add-item-dashboard-container';

export default () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path={home} component={dashboard}/>
        <Route exact path={additem} component={addItemDashboard}/>
      </Switch>
    </Fragment>
  </Router>
)