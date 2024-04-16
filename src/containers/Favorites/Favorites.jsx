import FavoritesComponent from '../../components/Favorites';

import { useFavoriteAdverts } from '../../hooks/advert';

const Favorites = () => {
  const { favoriteAdverts, handleFavoriteChange, loading } = useFavoriteAdverts();

  if (loading) return null;

  return (
    <FavoritesComponent
      favoriteAdverts={favoriteAdverts}
      handleFavoriteChange={handleFavoriteChange}
    />
  );
};

export default Favorites;
