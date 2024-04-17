import * as yup from 'yup';
import validationValues from '../values';

const bookSchema = yup.object().shape({
  name: validationValues.name,
  email: validationValues.email,
  date: validationValues.date,
  message: validationValues.message,
});

export default bookSchema;
