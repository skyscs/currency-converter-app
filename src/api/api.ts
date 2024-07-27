import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.currencybeacon.com/v1',
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (apiKey) {
      config.params = {
        ...config.params,
        api_key: apiKey,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
