import { useAdvert, useSearch } from '../../hooks/advert';
import CatalogComponent from '../../components/Catalog';
import { Loader } from '../../ui-kit';

const Catalog = () => {
  const { adverts, handlePageChange, handleFavoriteChange, isCanLoadMore, loading } = useAdvert();
  const serchData = useSearch();

  if (loading) return <Loader />;

  return (
    <CatalogComponent
      adverts={adverts}
      handlePageChange={handlePageChange}
      handleFavoriteChange={handleFavoriteChange}
      isCanLoadMore={isCanLoadMore}
      serchData={serchData}
    />
  );
};

export default Catalog;
