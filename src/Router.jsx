import { Route, Routes, Navigate } from 'react-router-dom';

import { route } from './constants/routes';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import Catalog from './containers/Catalog';

const PublicRoutes = [
  <Route key={route.home} path={route.home} element={<Home />} />,
  <Route key={route.favorites} path={route.favorites} element={<Favorites />} />,
  <Route key={route.catalog} path={route.catalog} element={<Catalog />} />,
];

const RoutesSwitch = () => {
  return (
    <Routes>
      {PublicRoutes}
      <Route path="*" element={<Navigate to={route.home} />} />
    </Routes>
  );
};

export default RoutesSwitch;
