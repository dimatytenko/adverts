import * as yup from 'yup';

const validationValues = {
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  date: yup.string().required('Date is required'),
  message: yup.string(),
};

export default validationValues;
