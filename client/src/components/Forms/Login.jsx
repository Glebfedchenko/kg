import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {renderField, required} from './fields';
import * as actions from '../../redux/actions/users';

const Login = ({history, submitting, handleSubmit, login}) => {
  const onSubmit = ({email, password}) => {
    const formData = {email, password};
    login(formData);
    history.push('/employees');
  };
  return (
    <div>
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
    </div>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
};

export default compose(
  reduxForm({
    form: 'login',
  }),
  withRouter,
  connect(
    state => ({loginStatus: state.users.loginStatus}),
    dispatch => ({login: data => dispatch(actions.login(data))}),
  ),
)(Login);
