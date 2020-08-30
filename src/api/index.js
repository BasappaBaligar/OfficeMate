import axios from 'axios';
import {
  API
} from '../../constants';
import { cacheAdapterEnhancer } from 'axios-extensions';

const api = axios.create({
  // cache will be enabled by default
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
  baseURL: API,
  transformResponse: [function (data, headers) {

    // console.log('axios api headers ==', headers);
    // Do whatever you want to transform the data
    const response = data instanceof Object ? data : JSON.parse(data);
    //console.log('axios api response ==', response);

    // const { Message } = response;
    // if (Message) {
    //   throw new Error(Message)
    // }
    return response;
  }],
});

export default api;