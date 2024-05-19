import * as yup from 'yup';

export const USER_VALIDATION_SHEMA = yup.object({
  name: yup
    .string()
    .min(2, 'this field must contain at least two characters')
    .max(64, ' fuul name is too long')
    .required('this field is required'),
  email: yup
    .string()
    .email("email doesn't correct")
    .required('this field is required'),
  birthday: yup
    .date()
    .max(new Date(), "date doesn't correct"),
});
