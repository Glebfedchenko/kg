import * as actions from '../actions/employees';

export const employees = (state = {employees: [], employee: {}}, action) => {
  switch (action.type) {
    case actions.GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case actions.GET_EMPLOYEE_BY_ID:
      return {
        ...state,
        employee: action.payload,
      };
    case actions.EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(
          e =>
            e._id === state.payload._id
              ? {
                  ...e,
                  name: action.payload.name,
                  surname: action.payload.surname,
                  sex: action.payload.sex,
                  position: action.payload.position,
                  salary: action.payload.salary,
                }
              : e,
        ),
      };
    case actions.ADD_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.concat(action.payload),
      };
    case actions.DELETE_EMPOLYEE:
      return {
        ...state,
        employees: state.employees.filter(e => e._id !== action.payload),
      };
    default:
      return state;
  }
};
