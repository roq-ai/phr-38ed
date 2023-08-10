import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalRecordInterface {
  id?: string;
  patient_id?: string;
  physician_id?: string;
  record: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  user?: UserInterface;
  _count?: {};
}

export interface MedicalRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  physician_id?: string;
  record?: string;
}
