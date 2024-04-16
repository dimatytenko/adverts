import styles from './Categories.module.scss';
import {
  Adults,
  AirConditioner,
  Beds,
  Cd,
  Conditioner,
  Engine,
  Freezer,
  Gas,
  Hob,
  Kitchen,
  Microwave,
  Radio,
  Shower,
  Toilet,
  Transmission,
  Water,
} from '../../assets/icons';

const Categories = ({ obj }) => {
  return (
    <ul className={styles.list}>
      {categories.map((category) => {
        if (obj[category.id]) {
          return (
            <li key={category.id} className={styles.item}>
              <div className={styles.item_icon}>{category.icon}</div>

              <p className={styles.item_text}>
                {!isNaN(obj[category.id]) && <span>{obj[category.id]} </span>}
                {category.text ? category.text : obj[category.id]}
              </p>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Categories;

const categories = [
  {
    id: 'adults',
    icon: <Adults />,
    text: 'adults',
  },
  {
    id: 'transmission',
    icon: <Transmission />,
  },
  {
    id: 'conditioner',
    icon: <Conditioner />,
    text: 'AC',
  },
  {
    id: 'engine',
    icon: <Engine />,
  },

  {
    id: 'kitchen',
    icon: <Kitchen />,
    text: 'kitchen',
  },
  {
    id: 'beds',
    icon: <Beds />,
    text: 'beds',
  },
  {
    id: 'airConditioner',
    icon: <AirConditioner />,
    text: 'Air conditioner',
  },
  {
    id: 'cd',
    icon: <Cd />,
    text: 'CD',
  },
  {
    id: 'radio',
    icon: <Radio />,
    text: 'radio',
  },
  {
    id: 'hob',
    icon: <Hob />,
    text: 'hob',
  },
  {
    id: 'toilet',
    icon: <Toilet />,
    text: 'toilet',
  },
  {
    id: 'shower',
    icon: <Shower />,
    text: 'shower',
  },
  {
    id: 'freezer',
    icon: <Freezer />,
    text: 'freezer',
  },
  {
    id: 'gas',
    icon: <Gas />,
    text: 'gas',
  },
  {
    id: 'water',
    icon: <Water />,
    text: 'water',
  },
  {
    id: 'microwave',
    icon: <Microwave />,
    text: 'microwave',
  },
];
