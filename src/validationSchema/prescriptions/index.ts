import * as yup from 'yup';

export const prescriptionValidationSchema = yup.object().shape({
  details: yup.string().required(),
  patient_id: yup.string().nullable(),
  physician_id: yup.string().nullable(),
});
