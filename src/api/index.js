import config from '../config.json';
import axios from 'axios';

export const getUserList = async () => {
  const { data } = await axios.get(config.API_URL) || [];
  return data;
};
