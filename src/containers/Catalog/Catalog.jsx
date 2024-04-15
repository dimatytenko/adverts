import { Outlet } from 'react-router-dom';

import { useAdvert } from '../../hooks/advert';

const Catalog = () => {
  const { handlePageChange } = useAdvert();

  return (
    <div>
      <h1>Catalog</h1>
      <Outlet />
    </div>
  );
};

export default Catalog;
