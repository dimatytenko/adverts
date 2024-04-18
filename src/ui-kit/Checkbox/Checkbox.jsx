import styles from './Checkbox.module.scss';

const Checkbox = ({ onChange, checked, value, name, id, label, icon, type = 'checkbox' }) => {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.input}
        id={id}
        type={type}
        checked={checked}
        value={value}
        onChange={onChange}
        name={name}
      />

      <label htmlFor={id} className={styles.label}>
        <div className={styles.label_inner}>
          <div className={styles.checkbox_icon}>{icon}</div>
          <p className={styles.checkbox_text}>{label}</p>
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
