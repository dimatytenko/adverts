import { createAsyncThunk } from '@reduxjs/toolkit';

import { advertsApi } from '../../services/Api';

export const getAdverts = createAsyncThunk(
  'advert/getAdverts',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await advertsApi.getAdverts(credentials);
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  },
);

export const loadMoreAdverts = createAsyncThunk(
  'advert/loadMoreAdverts',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await advertsApi.getAdverts(credentials);
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  },
);

export const getFavoriteAdverts = createAsyncThunk(
  'advert/getFavoriteAdverts',
  async (_, { rejectWithValue, getState }) => {
    const favoriteListIds = getState().advert.favoriteListIds;
    try {
      const response = await Promise.all(favoriteListIds.map((id) => advertsApi.getAdvert(id)));
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  },
);
