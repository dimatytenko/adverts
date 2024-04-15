import React from 'react';

import { useFavoriteAdverts } from '../../hooks/advert';

const Favorites = () => {
  useFavoriteAdverts();

  return <div>Favorites</div>;
};

export default Favorites;
