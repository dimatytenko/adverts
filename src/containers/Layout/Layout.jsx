import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import LayoutComponent from '../../components/Layout';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <LayoutComponent header={<Header />} footer={<Footer />}>
      {children}
    </LayoutComponent>
  );
};

export default Layout;
