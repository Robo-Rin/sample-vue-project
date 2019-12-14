import config from '../config.json';
import axios from 'axios';

export const getUserList = async () => {
  try {
    const { data } = await axios.get(config.API_URL) || [];
    return data;
  } catch (err) {
    console.error(`Error fetching user list: ${err}`);
    return [];
  }
};
