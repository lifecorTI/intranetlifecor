export interface IProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  patientId: string;
}

export interface ICreateProcedure {
  name: string;
  doctorId: string;
  userId: string;
  patientId: string;
  origin: string;
}
