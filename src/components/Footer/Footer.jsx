import styles from './Footer.module.scss';
import { Container, Logo } from '../../ui-kit';
import Navigation from '../Navigation';

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />

          <Navigation />
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
