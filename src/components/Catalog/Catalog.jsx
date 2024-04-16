import styles from './Catalog.module.scss';
import AdvertList from '../AdvertList';
import { Button } from '../../ui-kit';

const CatalogComponent = ({ adverts, handleFavoriteChange, handlePageChange, isCanLoadMore }) => {
  return (
    <div className={styles.wrapper}>
      <AdvertList list={adverts} handleFavoriteChange={handleFavoriteChange} />

      {isCanLoadMore && (
        <div className={styles.button}>
          <Button variant="secondary" onClick={handlePageChange}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default CatalogComponent;
