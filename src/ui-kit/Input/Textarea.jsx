import styles from './Input.module.scss';

const Textarea = ({ placeholder, value, onChange, type = 'text', name, error }) => {
  return (
    <div>
      <textarea
        className={`${styles.input} ${styles.textarea}`}
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

export default Textarea;
