import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './Input.module.scss';
import { Calendar } from '../../assets/icons';

const Datepicker = ({ placeholderText, selected, onChange }) => {
  return (
    <div className={styles.input_wrapper}>
      <DatePicker
        className={styles.input}
        placeholderText={placeholderText}
        selected={selected}
        onChange={onChange}
      />
      <div className={styles.icon}>
        <Calendar />
      </div>
    </div>
  );
};

export default Datepicker;
