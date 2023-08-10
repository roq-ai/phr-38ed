import { LabResultInterface } from 'interfaces/lab-result';
import { MedicalRecordInterface } from 'interfaces/medical-record';
import { PrescriptionInterface } from 'interfaces/prescription';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  user_id?: string;
  insurance_details?: string;
  created_at?: any;
  updated_at?: any;
  lab_result?: LabResultInterface[];
  medical_record?: MedicalRecordInterface[];
  prescription?: PrescriptionInterface[];
  user?: UserInterface;
  _count?: {
    lab_result?: number;
    medical_record?: number;
    prescription?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  insurance_details?: string;
}
