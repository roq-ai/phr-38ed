import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  insurance_details: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
