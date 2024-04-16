import styles from './AdvertList.module.scss';
import AdvertItem from '../AdvertItem';

const AdvertList = ({ list, handleFavoriteChange }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <AdvertItem key={item.id} item={item} handleFavoriteChange={handleFavoriteChange} />
      ))}
    </ul>
  );
};

export default AdvertList;
