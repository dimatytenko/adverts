import styles from './Input.module.scss';
import { Location } from '../../assets/icons';

const Input = ({ placeholder, value, onChange, type = 'text', name, error, label, icon }) => {
  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.input_wrapper}>
        <input
          id={label}
          className={`${styles.input} ${icon ? styles.input_icon : ''}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        {icon && (
          <div className={styles.icon_inner}>
            <Location />
          </div>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default Input;
