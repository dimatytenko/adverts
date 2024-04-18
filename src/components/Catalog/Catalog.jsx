import styles from './Catalog.module.scss';
import { Button } from '../../ui-kit';
import AdvertList from '../AdvertList';
import Sidebar from '../Sidebar';

const CatalogComponent = ({
  adverts,
  handleFavoriteChange,
  handlePageChange,
  isCanLoadMore,
  serchData,
}) => {
  return (
    <div className={styles.wrapper}>
      <Sidebar
        searchValue={serchData.searchValue}
        onSearchChange={serchData.handleSearch}
        equipment={serchData.equipment}
        onEquipmentChange={serchData.handleEquipment}
        vehicle={serchData.vehicle}
        onVehicleChange={serchData.handleSetVehicle}
        onSearch={serchData.handleSearchSubmit}
      />

      <div>
        <AdvertList list={adverts} handleFavoriteChange={handleFavoriteChange} />

        {isCanLoadMore && (
          <div className={styles.button}>
            <Button variant="secondary" onClick={handlePageChange}>
              Load more
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogComponent;
