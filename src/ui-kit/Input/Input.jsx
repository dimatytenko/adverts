import styles from './Input.module.scss';

const Input = ({ placeholder, value, onChange, type = 'text', name, error }) => {
  return (
    <div>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
