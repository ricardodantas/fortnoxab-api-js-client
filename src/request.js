import axios from 'axios';
import settings from './settings.js';

const request = axios.create({
  baseURL: settings.baseUrl,
  timeout: 1000,
  transformRequest: [function (data, headers) {
    if (data.accessToken && data.clientSecret) {
      headers['Access-Token'] = data.accessToken;
      headers['Client-Secret'] = data.clientSecret;
    }
    return JSON.stringify(data);
  }],
  headers: settings.defaultHeaders
});

export default request;