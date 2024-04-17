import { useFormik } from 'formik';

import VALIDATIONS from '../validation';

export const useBook = () => {
  const book = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: VALIDATIONS.bookSchema,
    initialValues: {
      name: '',
      email: '',
      date: '',
      message: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return {
    book,
  };
};
