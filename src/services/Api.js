import axios from 'axios';

import { BASE_URL } from './BaseUrl';
import { COUNT_ADVERTS } from '../constants/common';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const advertsApi = {
  getAdverts: async (page = 1) => {
    const response = await apiInstance.get(`/adverts?page=${page}&limit=${COUNT_ADVERTS}`);
    return response.data;
  },
  getAdvert: async (advertId) => {
    const response = await apiInstance.get(`/adverts/${advertId}`);
    return response.data;
  },
};
