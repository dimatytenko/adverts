import { useState } from 'react';

import styles from './AdvertItem.module.scss';
import { Heart } from '../../assets/icons';
import { Button, Categories, Modal, TrackInfo } from '../../ui-kit';
import Details from '../../containers/Details';

const AdvertItem = ({ item, handleFavoriteChange }) => {
  const [isModal, setisModal] = useState(false);

  const handleOpenModal = () => {
    setisModal(true);
  };

  const handleCloseModal = () => {
    setisModal(false);
  };

  const handleFavorite = () => {
    handleFavoriteChange(item.id);
  };

  const categories = {
    adults: item.adults,
    transmission: item.transmission,
    engine: item.engine,
    ...item.details,
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={item.gallery[0]} alt={item.name} />
        </div>
        <div className={styles.content}>
          <div>
            <div className={styles.content_top}>
              <h3 className={styles.title}>{item.name}</h3>
              <div className={styles.content_top_right}>
                <p className={styles.title}>€{item.price.toFixed(2)}</p>
                <div
                  className={`${styles.heart_btn} ${
                    item.isFavorite ? styles.heart_btn_active : ''
                  }`}
                  onClick={handleFavorite}
                >
                  <Heart />
                </div>
              </div>
            </div>

            <TrackInfo reviews={item.reviews} location={item.location} />
          </div>

          <p className={styles.description}>{item.description}</p>

          <Categories obj={categories} />

          <div>
            <Button onClick={handleOpenModal}>Show more</Button>
          </div>
        </div>
      </div>
      {isModal && (
        <Modal onClose={handleCloseModal}>
          <Details item={item} categories={categories} />
        </Modal>
      )}
    </>
  );
};

export default AdvertItem;
