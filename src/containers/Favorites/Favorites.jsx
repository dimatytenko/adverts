import FavoritesComponent from '../../components/Favorites';

import { useFavoriteAdverts } from '../../hooks/advert';
import { Loader } from '../../ui-kit';

const Favorites = () => {
  const { favoriteAdverts, handleFavoriteChange, loading } = useFavoriteAdverts();

  if (loading) return <Loader />;

  return (
    <FavoritesComponent
      favoriteAdverts={favoriteAdverts}
      handleFavoriteChange={handleFavoriteChange}
    />
  );
};

export default Favorites;
