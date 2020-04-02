import axios from 'axios';
import Config from '../config';

const Login = {
  async postAuthenticate(login, password) {
    try {
      const response = await axios.post(
        `${Config.ROOT_URL}/authenticate/sso`,
        {
          login,
          password,
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async postAuthenticateSSO() {
    const lsUser = localStorage.getItem('user');
    if (lsUser) {
      const lsUserParse = JSON.parse(lsUser);
      try {
        const response = await axios.post(
          `${Config.ROOT_URL}/authenticate/sso`,
          {
            login: lsUserParse.user.login,
            app_token: lsUserParse.token,
          },
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
};

export default Login;
