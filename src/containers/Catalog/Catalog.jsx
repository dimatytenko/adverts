import { useAdvert } from '../../hooks/advert';
import CatalogComponent from '../../components/Catalog';

const Catalog = () => {
  const { adverts, handlePageChange, handleFavoriteChange, isCanLoadMore, loading } = useAdvert();

  if (loading) return null;

  return (
    <CatalogComponent
      adverts={adverts}
      handlePageChange={handlePageChange}
      handleFavoriteChange={handleFavoriteChange}
      isCanLoadMore={isCanLoadMore}
    />
  );
};

export default Catalog;
