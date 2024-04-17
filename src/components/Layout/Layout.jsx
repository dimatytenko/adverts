import styles from './Layout.module.scss';
import { Container } from '../../ui-kit';

const LayoutComponent = ({ header, footer, children, hideHeader, hideFooter }) => {
  return (
    <div className={styles.wrapper}>
      {!hideHeader && header}

      <main className={styles.main}>
        <Container>{children}</Container>
      </main>

      {!hideFooter && footer}
    </div>
  );
};

export default LayoutComponent;
