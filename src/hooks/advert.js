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

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState('Kyiv, Ukraine');
  const [equipment, setEquipment] = useState([]);
  const [vehicle, setVehicle] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleEquipment = (e) => {
    if (equipment.includes(e.target.value)) {
      setEquipment((prev) => prev.filter((item) => item !== e.target.value));
      return;
    }
    setEquipment((prev) => [...prev, e.target.value]);
  };

  const handleSetVehicle = (e) => {
    setVehicle(e.target.value);
  };

  const resetFilters = () => {
    setSearchValue('Kyiv, Ukraine');
    setEquipment([]);
    setVehicle('');
  };

  const handleSearchSubmit = () => {
    console.log('searchValue', searchValue);
    console.log('equipment', equipment);
    console.log('vehicle', vehicle);

    resetFilters();
  };

  return {
    searchValue,
    handleSearch,
    equipment,
    handleEquipment,
    vehicle,
    handleSetVehicle,
    handleSearchSubmit,
  };
};
