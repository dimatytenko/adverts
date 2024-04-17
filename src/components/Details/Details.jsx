import { useState } from 'react';

import Features from '../Features';
import Reviews from '../Reviews';
import styles from './Details.module.scss';
import { TrackInfo } from '../../ui-kit';
import Form from '../Form';

const tabs = {
  features: 'features',
  reviews: 'reviews',
};

const DetailsComponent = ({ item, categories, book }) => {
  const [tab, setTab] = useState(tabs.features);

  const handleTab = (tab) => {
    setTab(tab);
  };

  return (
    <div className={styles.details_wrapper}>
      <div className={styles.details_content}>
        <div className={styles.details_content_top}>
          <h3 className={styles.title}>{item.name}</h3>
          <div className={styles.details_info}>
            <TrackInfo reviews={item.reviews} location={item.location} />
          </div>
          <p className={styles.title}>€{item.price.toFixed(2)}</p>
        </div>

        <div className={styles.scroll_content}>
          <div className={styles.scroll_content_inner}>
            <div className={styles.details_images}>
              {item.gallery.map((img) => (
                <div key={img} className={styles.image}>
                  <img key={img} src={img} alt={item.name} />
                </div>
              ))}
            </div>

            <p>{item.description}</p>

            <div className={styles.tabs}>
              <div
                className={`${styles.tab} ${tab === tabs.features && styles.active}`}
                onClick={() => handleTab(tabs.features)}
              >
                Features
              </div>
              <div
                className={`${styles.tab} ${tab === tabs.reviews && styles.active}`}
                onClick={() => handleTab(tabs.reviews)}
              >
                Reviews
              </div>
            </div>

            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                {tab === tabs.features && (
                  <Features
                    form={item.form}
                    length={item.length}
                    width={item.width}
                    height={item.height}
                    tank={item.tank}
                    consumption={item.consumption}
                    categories={categories}
                  />
                )}
                {tab === tabs.reviews && <Reviews reviews={item.reviews} />}
              </div>

              <Form book={book} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
