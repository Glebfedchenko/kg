import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {store} from '../redux/store';
import Employees from './Employees/Employees';
import EditEmployee from './Forms/EditEmployee';
import AddEmployee from './Forms/AddEmployee';
import Login from './Forms/Login';
import Register from './Forms/Register';

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/employees" component={Employees} />
        <Route exact path="/employees/add" component={AddEmployee} />
        <Route exact path="/employees/:id" component={EditEmployee} />
      </Switch>
    </Router>
  </Provider>
);
export default Routes;
