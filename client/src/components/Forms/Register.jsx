import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {renderField, required} from './fields';
import * as actions from '../../redux/actions/users';

const Register = ({history, submitting, handleSubmit, register}) => {
  const onSubmit = ({email, password}) => {
    const formData = {email, password};
    register(formData);
    history.push('/login');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-uppercase">Login</h1>
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={[required]}
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        validate={[required]}
      />
      <button
        type="submit"
        disabled={submitting}
        className="btn btn-warning text-uppercase"
      >
        Login
      </button>
    </form>
  );
};

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  register: PropTypes.func.isRequired,
};

export default compose(
  reduxForm({
    form: 'register',
  }),
  connect(
    state => ({registerStatus: state.users.registerStatus}),
    dispatch => ({register: data => dispatch(actions.register(data))}),
  ),
  withRouter,
)(Register);
