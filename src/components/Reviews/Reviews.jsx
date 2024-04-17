import styles from './Reviews.module.scss';
import { Rating } from '../../ui-kit';

const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.list}>
      {reviews.map((review) => (
        <Review
          key={review.comment}
          name={review.reviewer_name}
          comment={review.comment}
          rating={review.reviewer_rating}
        />
      ))}
    </ul>
  );
};

export default Reviews;

const Review = ({ name, comment, rating }) => {
  return (
    <li className={styles.item}>
      <div className={styles.item_top}>
        <div className={styles.item_avatar}>{name[0]}</div>
        <div className={styles.item_info}>
          <p className={styles.item_name}>{name}</p>
          <Rating rating={rating} />
        </div>
      </div>
      <p className={styles.item_text}>{comment}</p>
    </li>
  );
};
