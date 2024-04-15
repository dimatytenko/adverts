import styles from './Header.module.scss';
import { Container, Logo } from '../../ui-kit';
import Navigation from '../Navigation';

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />

          <Navigation />

          <div></div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderComponent;
