import * as yup from 'yup';

export const labResultValidationSchema = yup.object().shape({
  result: yup.string().required(),
  patient_id: yup.string().nullable(),
  lab_technician_id: yup.string().nullable(),
});
