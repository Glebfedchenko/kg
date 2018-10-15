import axios from 'axios';

const BASE_URL = `http://localhost:5000/api/employees`;
export const GET_EMPLOYEES = `GET_EMPLOYEES`;
export const EDIT_EMPLOYEE = `EDIT_EMPLOYEE`;
export const DELETE_EMPOLYEE = `DELETE_EMPLOYEE`;
export const ADD_EMPLOYEE = `ADD_EMPLOYEE`;
export const GET_EMPLOYEE_BY_ID = `GET_EMPLOYEE_BY_ID`;

export const getEmployees = () => {
  const request = axios.get(BASE_URL).then(res => res.data);
  return {
    type: GET_EMPLOYEES,
    payload: request,
  };
};

export const getEmployeeById = id => {
  const request = axios.get(`${BASE_URL}/${id}`).then(res => res.data);
  return {
    type: GET_EMPLOYEE_BY_ID,
    payload: request,
  };
};
export const editEmpolyee = (data, id) => {
  // eslint-disable-next-line
  const request = axios.put(`${BASE_URL}/${id}`, data).then(res => res.data);
  return {
    type: EDIT_EMPLOYEE,
    payload: request,
  };
};

export const deleteEmployee = id => {
  // eslint-disable-next-line
  const request = axios.delete(`${BASE_URL}`).then(res => res.data);
  return {
    type: DELETE_EMPOLYEE,
    payload: id,
  };
};

export const addEmployee = data => {
  const request = axios.post(`${BASE_URL}`, data).then(res => res.data);
  return {
    type: ADD_EMPLOYEE,
    payload: request,
  };
};
