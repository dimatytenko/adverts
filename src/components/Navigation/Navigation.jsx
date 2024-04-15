import { Link, useLocation } from 'react-router-dom';

import styles from './Navigation.module.scss';
import { route } from '../../constants/routes';

const navList = [
  { title: 'Home', path: route.home },
  { title: 'Catalog', path: route.catalog },
  { title: 'Favorites', path: route.favorites },
];

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {navList.map(({ title, path }) => (
          <li key={path} className={styles.item}>
            <Link to={path} className={`${styles.link} ${path === pathname ? styles.active : ''}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
