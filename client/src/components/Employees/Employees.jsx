import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';
import PropTypes from 'prop-types';
import Spinner from 'react-svg-spinner';
import {Link} from 'react-router-dom';
import * as actions from '../../redux/actions/employees';
import Employee from './Employee';

const Employees = ({employees}) => (
  <Fragment>
    <h1 className="text-center text-uppercase">List of employees</h1>
    <table className="table table-dark text-center" style={{marginTop: '10px'}}>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Sex</th>
          <th scope="col">Position</th>
          <th scope="col">Salary</th>
          <th scope="col">Date added</th>
          <th scope="col"> Edit </th>
          <th scope="col">Delete </th>
        </tr>
      </thead>
      <tbody>
        {employees ? (
          employees.map(employee => (
            <Employee key={employee._id} employee={employee} />
          ))
        ) : (
          <Spinner size="128px" />
        )}
      </tbody>
    </table>
    <div className="text-center">
      <Link to="/employees/add">
        <button type="button" className="text-uppercase btn btn-success">
          Add employee
        </button>
      </Link>
    </div>
  </Fragment>
);
Employees.defaultProps = {
  employees: PropTypes.arrayOf(Object),
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(Object),
};

export default compose(
  connect(
    state => ({employees: state.employees.employees}),
    dispatch => ({getEmployees: () => dispatch(actions.getEmployees())}),
  ),
  lifecycle({
    componentDidMount() {
      this.props.getEmployees();
    },
  }),
)(Employees);
