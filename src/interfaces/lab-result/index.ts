import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LabResultInterface {
  id?: string;
  patient_id?: string;
  lab_technician_id?: string;
  result: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  user?: UserInterface;
  _count?: {};
}

export interface LabResultGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  lab_technician_id?: string;
  result?: string;
}
