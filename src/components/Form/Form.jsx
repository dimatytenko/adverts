import styles from './Form.module.scss';
import { Button, Input, Textarea, Datepicker } from '../../ui-kit';

const Form = ({ book }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.text}>Stay connected! We are always ready to help you.</p>

      <form className={styles.form} onSubmit={book.handleSubmit}>
        <Input
          placeholder="name"
          name="name"
          value={book.values.name}
          onChange={book.handleChange}
          error={book.errors.name}
        />

        <Input
          placeholder="email"
          name="email"
          type="email"
          value={book.values.email}
          onChange={book.handleChange}
          error={book.errors.email}
        />

        <Datepicker
          placeholderText="Booking date"
          selected={book.values.date}
          onChange={(date) => book.handleChange({ target: { name: 'date', value: date } })}
        />

        <Textarea
          placeholder="message"
          name="message"
          value={book.values.message}
          onChange={book.handleChange}
          error={book.errors.message}
        />

        <div className={styles.button}>
          <Button
            type="submit"
            disabled={!book.values.name || !book.values.email || !book.values.date}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
