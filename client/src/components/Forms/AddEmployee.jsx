import React from 'react';
import {withRouter} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {renderField, required} from './fields';
import * as actions from '../../redux/actions/employees';

const AddEmployee = ({history, submitting, handleSubmit, addEmployee}) => {
  const onSubmit = ({name, surname, position, sex, salary}) => {
    const formdata = {name, surname, position, sex, salary};
    addEmployee(formdata);
    history.push('/employees');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-uppercase">Add new employee</h1>
      <Field
        name="name"
        type="text"
        component={renderField}
        label="Name"
        validate={[required]}
      />
      <Field
        name="surname"
        type="text"
        component={renderField}
        label="Surname"
        validate={[required]}
      />
      <Field
        name="sex"
        type="text"
        component={renderField}
        label="Sex"
        validate={[required]}
      />
      <Field
        name="salary"
        type="number"
        component={renderField}
        label="Salary"
        validate={[required]}
      />
      <Field
        name="position"
        type="text"
        component={renderField}
        label="Position"
        validate={[required]}
      />
      <button
        type="submit"
        disabled={submitting}
        className="btn btn-success text-uppercase"
      >
        Add
      </button>
    </form>
  );
};

AddEmployee.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  addEmployee: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default compose(
  withRouter,
  reduxForm({form: 'add'}),
  connect(
    null,
    dispatch => ({addEmployee: data => dispatch(actions.addEmployee(data))}),
  ),
)(AddEmployee);
