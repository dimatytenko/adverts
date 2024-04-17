import { useAdvert } from '../../hooks/advert';
import CatalogComponent from '../../components/Catalog';
import { Loader } from '../../ui-kit';

const Catalog = () => {
  const { adverts, handlePageChange, handleFavoriteChange, isCanLoadMore, loading } = useAdvert();

  if (loading) return <Loader />;

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
