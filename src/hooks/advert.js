import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { advertOperations, advertSelectors } from '../redux/advert';

export const useAdvert = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const adverts = useSelector(advertSelectors.getAdvertsWithFavorites);

  console.log('adverts', adverts);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const getAdverts = async () => {
    try {
      await dispatch(advertOperations.getAdverts(page));
    } catch (error) {
      console.error('Error fetching adverts', error);
    }
  };

  useEffect(() => {
    getAdverts();
  }, [page]);

  return {
    page,
    handlePageChange,
  };
};

export const useFavoriteAdverts = () => {
  const dispatch = useDispatch();

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

  return {};
};
