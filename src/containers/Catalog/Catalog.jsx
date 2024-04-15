import { Outlet } from 'react-router-dom';

const Catalog = () => {
  return (
    <div>
      <h1>Catalog</h1>
      <Outlet />
    </div>
  );
};

export default Catalog;
