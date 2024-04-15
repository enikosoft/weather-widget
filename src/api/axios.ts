import AxiosReq, {Axios} from 'axios';

import {WEATHER_API_URL} from 'config/api';

class Request {
  private url: string;
  private axios: Axios;

  constructor(url: string) {
    this.url = url;

    this.axios = AxiosReq.create({
      baseURL: this.url,
    });

    AxiosReq.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    AxiosReq.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    AxiosReq.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  get instance() {
    return this.axios;
  }
}

export const weatherServer = new Request(WEATHER_API_URL).instance;
