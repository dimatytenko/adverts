import styles from './Features.module.scss';
import { Categories } from '../../ui-kit';

const Features = ({ categories, form, length, width, height, tank, consumption }) => {
  return (
    <>
      <Categories obj={categories} />
      <div className={styles.vehicle_details}>
        <p className={styles.vehicle_details_title}>Vehicle details</p>
        <div className={styles.devider}></div>
        <ul className={styles.vehicle_details_list}>
          <li className={styles.vehicle_details_item}>
            <p className={styles.vehicle_details_text}>Form</p>
            <p className={styles.vehicle_details_text}>{form}</p>
          </li>

          <li className={styles.vehicle_details_item}>
            <p className={styles.vehicle_details_text}>Length</p>
            <p className={styles.vehicle_details_text}>{length}</p>
          </li>

          <li className={styles.vehicle_details_item}>
            <p className={styles.vehicle_details_text}>Width</p>
            <p className={styles.vehicle_details_text}>{width}</p>
          </li>

          <li className={styles.vehicle_details_item}>
            <p className={styles.vehicle_details_text}>Height</p>
            <p className={styles.vehicle_details_text}>{height}</p>
          </li>

          <li className={styles.vehicle_details_item}>
            <p className={styles.vehicle_details_text}>Tank</p>
            <p className={styles.vehicle_details_text}>{tank}</p>
          </li>

          <li className={styles.vehicle_details_item}>
            <p className={styles.vehicle_details_text}>Consumption</p>
            <p className={styles.vehicle_details_text}>{consumption}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Features;
