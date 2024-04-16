import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { advertOperations, advertSelectors, advertReducer } from '../redux/advert';

export const useAdvert = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const adverts = useSelector(advertSelectors.getAdvertsWithFavorites);
  const isCanLoadMore = useSelector(advertSelectors.getCanLoadMore);
  const loading = useSelector(advertSelectors.getAdvertsLoading);
  const { handleFavoriteChange } = useFavoriteChange();

  const handlePageChange = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const getAdverts = async () => {
    try {
      await dispatch(advertOperations.getAdverts());
    } catch (error) {
      console.error('Error fetching adverts', error);
    }
  };

  useEffect(() => {
    getAdverts();
  }, []);

  const loadMoreAdverts = async () => {
    try {
      await dispatch(advertOperations.loadMoreAdverts(page));
    } catch (error) {
      console.error('Error fetching adverts', error);
    }
  };

  useEffect(() => {
    if (page > 1) {
      loadMoreAdverts();
    }
  }, [page]);

  return {
    adverts,
    page,
    handlePageChange,
    handleFavoriteChange,
    isCanLoadMore,
    loading,
  };
};

export const useFavoriteAdverts = () => {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector(advertSelectors.getFavoriteAdvertsWithFavorites);
  const loading = useSelector(advertSelectors.getAdvertsLoading);

  const { handleFavoriteChange } = useFavoriteChange();

  const getFavoriteAdverts = async () => {
    try {
      await dispatch(advertOperations.getFavoriteAdverts());
    } catch (error) {
      console.error('Error fetching favorite adverts', error);
    }
  };

  useEffect(() => {
    getFavoriteAdverts();
  }, []);

  return {
    favoriteAdverts,
    handleFavoriteChange,
    loading,
  };
};

const useFavoriteChange = () => {
  const dispatch = useDispatch();

  const handleFavoriteChange = (id) => {
    dispatch(advertReducer.toggleFavoriteAdvert(id));
  };

  return {
    handleFavoriteChange,
  };
};
