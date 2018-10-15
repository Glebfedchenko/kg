import axios from 'axios';

const BASE_URL = `http://localhost:5000/api/users`;
export const LOGIN = `LOGIN`;
export const REGISTER = `REGISTER`;

export const login = data => {
  const request = axios.post(`${BASE_URL}/login`, data).then(res => res.data);
  return {
    type: LOGIN,
    payload: request,
  };
};

export const register = data => {
  const request = axios
    .post(`${BASE_URL}/register`, data)
    .then(res => res.data);
  return {
    type: REGISTER,
    payload: request,
  };
};
