import { BASE_URL } from './BaseUrl';
import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const advertsApi = {
  getAdverts: async (page) => {
    const response = await apiInstance.get(`/adverts?page=${page}&limit=4`);
    return response.data;
  },
  getAdvert: async (advertId) => {
    const response = await apiInstance.get(`/adverts/${advertId}`);
    return response.data;
  },
};
