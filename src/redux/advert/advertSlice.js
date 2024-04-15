import { createSlice } from '@reduxjs/toolkit';

import * as advertOperations from './advertOperations';

const initialState = {
  list: [],
  favoriteList: [],
  favoriteListIds: ['1', '3'],
  loading: false,
  error: null,
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  reducers: {
    addFavoriteAdvert(state, action) {
      state.favoriteListIds.push(action.payload);
    },
    removeFavoriteAdvert(state, action) {
      state.favoriteListIds = state.favoriteListIds.filter((id) => id !== action.payload);
      state.favoriteList = state.favoriteList.filter((advert) => advert.id !== action.payload);
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
      })
      .addCase(advertOperations.getAdverts.rejected, (state, action) => {
        state.loading = false;
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

export const { addFavoriteAdvert, removeFavoriteAdvert } = advertSlice.actions;
