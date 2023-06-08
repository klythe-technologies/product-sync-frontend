import axios from 'axios';
import { ApiConfig } from '../../config/api.config';

export const axiosClient = axios.create({
  baseURL: ApiConfig.baseUrl,
  timeout: 10000,
});

export default axiosClient;