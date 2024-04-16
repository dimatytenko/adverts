import { createSelector } from 'reselect';

export const getAdverts = (state) => state.advert.list;
export const getAdvertsLoading = (state) => state.advert.loading;
export const getAdvertsError = (state) => state.advert.error;
export const getCanLoadMore = (state) => state.advert.isCanLoadMore;
export const getFavoriteAdverts = (state) => state.advert.favoriteList;
export const getFavoriteAdvertsIds = (state) => state.advert.favoriteListIds;

export const getAdvertById = (state, advertId) =>
  state.advert.list.find((advert) => advert.id === advertId);

export const getAdvertsWithFavorites = createSelector(
  [getAdverts, getFavoriteAdvertsIds],
  (adverts, favoriteListIds) => {
    return adverts?.map((advert) => ({
      ...advert,
      isFavorite: favoriteListIds.includes(advert.id),
    }));
  },
);

export const getFavoriteAdvertsWithFavorites = createSelector(
  [getFavoriteAdverts, getFavoriteAdvertsIds],
  (adverts, favoriteListIds) => {
    return adverts?.map((advert) => ({
      ...advert,
      isFavorite: favoriteListIds.includes(advert.id),
    }));
  },
);
