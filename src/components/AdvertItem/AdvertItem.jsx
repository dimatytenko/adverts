import styles from './AdvertItem.module.scss';
import { Heart, Location, Star } from '../../assets/icons';
import { Button, Categories } from '../../ui-kit';

const AdvertItem = ({ item, handleFavoriteChange }) => {
  console.log('item', item);

  const handleFavorite = () => {
    handleFavoriteChange(item.id);
  };

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
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={item.gallery[0]} alt={item.name} />
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.content_top}>
            <h3 className={styles.title}>{item.name}</h3>
            <div className={styles.content_top_right}>
              <p className={styles.price}>€{item.price.toFixed(2)}</p>
              <div
                className={`${styles.heart_btn} ${item.isFavorite ? styles.heart_btn_active : ''}`}
                onClick={handleFavorite}
              >
                <Heart />
              </div>
            </div>
          </div>

          <div className={styles.content_info}>
            <div className={styles.content_info_box}>
              <div className={`${styles.icon} ${styles.star}`}>
                <Star />
              </div>

              {item.reviews.length > 0 ? (
                <p className={`${styles.conntent_info_text} ${styles.underline}`}>
                  {getReviewsString(item.reviews)}
                </p>
              ) : (
                <p className={styles.conntent_info_text}>No reviews</p>
              )}
            </div>

            <div className={styles.content_info_box}>
              <div className={styles.icon}>
                <Location />
              </div>

              <p className={styles.conntent_info_text}>{getLocationString(item.location)}</p>
            </div>
          </div>
        </div>

        <p className={styles.description}>{item.description}</p>

        <Categories
          obj={{
            adults: item.adults,
            transmission: item.transmission,
            engine: item.engine,
            ...item.details,
          }}
        />

        <div>
          <Button>Show more</Button>
        </div>
      </div>
    </div>
  );
};

export default AdvertItem;
