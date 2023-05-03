import axios from 'axios';
import { BASE_URL } from 'src/static/constants';

const defaultOptions = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};
const axiosApi = axios.create(defaultOptions);

export default axiosApi;
