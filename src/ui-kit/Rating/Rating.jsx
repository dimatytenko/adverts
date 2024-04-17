import styles from './Rating.module.scss';
import { Star } from '../../assets/icons';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <div key={index} className={index < rating ? `${styles.star} ${styles.active}` : styles.star}>
        <Star />
      </div>
    );
  });

  return <div className={styles.rating}>{stars}</div>;
};

export default Rating;
