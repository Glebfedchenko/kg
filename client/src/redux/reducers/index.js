import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {employees} from './employees';
import {users} from './users';

export const index = combineReducers({employees, users, form: formReducer});
