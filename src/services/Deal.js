import axios from 'axios';
import Config from '../config';

const Deal = {
  async postSearch({ type, value_start, value_end, term, lat, lng }) {
    try {
      const response = await axios.post(
        `${Config.ROOT_URL}/deal/search`,
        {
          type,
          value_start,
          value_end,
          term,
          lat,
          lng,
        },
        {
          headers: { Authorization: 'token' },
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async postNewDeal({
    type,
    value,
    description,
    trade_for,
    address,
    city,
    state,
    zip_code,
    urgency_type,
    urgency_date,
  }) {
    try {
      const response = await axios.post(
        `${Config.ROOT_URL}/deal/search`,
        {
          type, //ENUM (1 – Venda, 2 – Troca, 3 – Desejo),
          value,
          description,
          trade_for,
          location: {
            lat: 0.0,
            lng: 0.0,
            address,
            city,
            state,
            zip_code,
          },
          urgency: {
            type: urgency_type, // ENUM (1 – Baixa, 2 – Média, 3 – Alta, 4 – Data),
            limit_date: urgency_date,
          },
          photos: [{ src: '' }, { src: '' }],
        },
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

export default Deal;
