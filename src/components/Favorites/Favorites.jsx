import styles from './Favorites.module.scss';
import AdvertList from '../AdvertList';

const FavoritesComponent = ({ favoriteAdverts, handleFavoriteChange }) => {
  return (
    <div className={styles.wrapper}>
      <AdvertList list={favoriteAdverts} handleFavoriteChange={handleFavoriteChange} />
    </div>
  );
};

export default FavoritesComponent;
