import * as actions from '../actions/users';

export const users = (state = {loginStatus: false}, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        loginStatus: action.payload,
      };
    case actions.REGISTER:
      return {
        ...state,
        registerStatus: action.payload,
      };
    default:
      return state;
  }
};
