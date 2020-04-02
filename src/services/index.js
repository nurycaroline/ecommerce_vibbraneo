import axios from 'axios';
import Login from './Login';
import Deal from './Deal';
import User from './User';

const UNAUTHORIZED = 401;
axios.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response) {
      const { status } = error.response;
      if (status && status === UNAUTHORIZED) {
        // logout
      }
    }
    return Promise.reject(error);
  },
);

axios.interceptors.request.use(
  response => response,
  error => Promise.reject(error),
);

const Api = {
  Login,
  Deal,
  User,
};

export default Api;
