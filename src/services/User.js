import axios from 'axios';
import Config from '../config';

const User = {
  async getDeals() {
    try {
      const response = await axios.get(
        `${Config.ROOT_URL}/user/deal`,
        {},
        {
          headers: { Authorization: 'token' },
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default User;
