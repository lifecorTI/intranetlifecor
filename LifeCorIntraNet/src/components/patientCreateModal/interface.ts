import { IPatient } from "../patients/interface";

export interface IDoctor {
  name: string;
  specialization: string;
  location: string;
  id: string;
}

export interface ICreatePatientWithProcedure {
  patient: IPatient;
  doctorId: string;
  name: string;
}

export interface IResponsePatientWithProcedure extends ICreatePatientWithProcedure {
  id: string
}

export interface IProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
