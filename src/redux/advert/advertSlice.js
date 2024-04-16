import { createSlice } from '@reduxjs/toolkit';

import * as advertOperations from './advertOperations';
import { COUNT_ADVERTS } from '../../constants/common';

const initialState = {
  list: [],
  favoriteList: [],
  favoriteListIds: ['1', '3'],
  loading: false,
  error: null,
  isCanLoadMore: true,
  loadingMore: false,
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  reducers: {
    toggleFavoriteAdvert(state, action) {
      const advertId = action.payload;
      if (state.favoriteListIds.includes(advertId)) {
        state.favoriteListIds = state.favoriteListIds.filter((id) => id !== advertId);
        state.favoriteList = state.favoriteList.filter((advert) => advert.id !== advertId);
      } else {
        state.favoriteListIds.push(advertId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(advertOperations.getAdverts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(advertOperations.getAdverts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
        state.isCanLoadMore = action.payload.length === COUNT_ADVERTS;
      })
      .addCase(advertOperations.getAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(advertOperations.loadMoreAdverts.pending, (state) => {
        state.loadingMore = true;
        state.error = null;
      })
      .addCase(advertOperations.loadMoreAdverts.fulfilled, (state, action) => {
        state.list = [...state.list, ...action.payload];
        state.loadingMore = false;
        state.isCanLoadMore = action.payload.length === COUNT_ADVERTS;
      })
      .addCase(advertOperations.loadMoreAdverts.rejected, (state, action) => {
        state.loadingMore = false;
        state.error = action.payload;
      })
      .addCase(advertOperations.getFavoriteAdverts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(advertOperations.getFavoriteAdverts.fulfilled, (state, action) => {
        state.favoriteList = action.payload;
        state.loading = false;
      })
      .addCase(advertOperations.getFavoriteAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const advert = advertSlice.reducer;

export const { toggleFavoriteAdvert } = advertSlice.actions;
