import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';
import { route } from '../../constants/routes';
import { Van } from '../../assets/icons';

const Logo = ({ variant }) => {
  return (
    <Link to={route.home}>
      <div className={`${styles.logo} ${variant ? styles[variant] : ''}`}>
        <div className={styles.icon}>
          <Van />
        </div>
        <p className={styles.title}>Adverts</p>
      </div>
    </Link>
  );
};

export default Logo;
