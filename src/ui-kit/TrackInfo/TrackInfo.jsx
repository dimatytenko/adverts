import styles from './TrackInfo.module.scss';
import { Location, Star } from '../../assets/icons';

const TrackInfo = ({ reviews, location }) => {
  const getReviewsString = (reviews) => {
    const total = reviews.reduce((acc, review) => acc + review.reviewer_rating, 0);
    const average = total / reviews.length;
    return `${average.toFixed(1)} (${reviews.length} Reviews)`;
  };

  const getLocationString = (location) => {
    const locationArr = location.split(', ');
    return locationArr.length > 1 ? `${locationArr[1]}, ${locationArr[0]}` : location;
  };

  return (
    <div className={styles.content_info}>
      <div className={styles.content_info_box}>
        <div className={`${styles.icon} ${styles.star}`}>
          <Star />
        </div>

        {reviews.length > 0 ? (
          <p className={`${styles.conntent_info_text} ${styles.underline}`}>
            {getReviewsString(reviews)}
          </p>
        ) : (
          <p className={styles.conntent_info_text}>No reviews</p>
        )}
      </div>

      <div className={styles.content_info_box}>
        <div className={styles.icon}>
          <Location />
        </div>

        <p className={styles.conntent_info_text}>{getLocationString(location)}</p>
      </div>
    </div>
  );
};

export default TrackInfo;
