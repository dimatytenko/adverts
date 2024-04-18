import styles from './Sidebar.module.scss';
import { Input, Button, Checkbox } from '../../ui-kit';
import {
  Conditioner,
  Transmission,
  Kitchen,
  Tv,
  Shower,
  Van,
  Fully,
  Alcove,
} from '../../assets/icons';

const checkboxes = [
  {
    label: 'AC',
    icon: <Conditioner />,
  },
  {
    label: 'Automatic',
    icon: <Transmission />,
  },
  {
    label: 'Kitchen',
    icon: <Kitchen />,
  },
  {
    label: 'TV',
    icon: <Tv />,
  },
  {
    label: 'Shower/WC',
    icon: <Shower />,
  },
];

const radioButtons = [
  {
    label: 'Van',
    icon: <Van />,
  },
  {
    label: 'Fully Integrated',
    icon: <Fully />,
  },
  {
    label: 'Alcove',
    icon: <Alcove />,
  },
];

const Sidebar = ({
  searchValue,
  onSearchChange,
  equipment,
  onEquipmentChange,
  vehicle,
  onVehicleChange,
  onSearch,
}) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.search}>
        <Input
          placeholder="Search"
          icon
          label="location"
          value={searchValue}
          onChange={onSearchChange}
        />

        <div>
          <h2 className={styles.title}>Filters</h2>

          <Filter
            list={checkboxes}
            title="Vehicle equipment"
            value={equipment}
            onChange={onEquipmentChange}
          />
        </div>

        <div>
          <Filter
            list={radioButtons}
            title="Vehicle type"
            value={vehicle}
            onChange={onVehicleChange}
            name="vehicle"
            type="radio"
          />
        </div>
      </div>
      <div className={styles.button} onClick={onSearch}>
        <Button>Search</Button>
      </div>
    </aside>
  );
};

export default Sidebar;

const Filter = ({ list, title, value, onChange, name, type }) => {
  return (
    <>
      <h3 className={styles.subtitle}>{title}</h3>
      <div className={styles.divider}></div>

      <div className={styles.list}>
        {list.map((checkbox) => (
          <Checkbox
            key={checkbox.label}
            id={checkbox.label}
            label={checkbox.label}
            icon={checkbox.icon}
            checked={type ? value === checkbox.label : value.includes(checkbox.label)}
            value={checkbox.label}
            onChange={onChange}
            name={name}
            type={type}
          />
        ))}
      </div>
    </>
  );
};
