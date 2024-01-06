import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAttributesLanDto {
  @IsString()
  @IsNotEmpty()
  LoginTitle: string;

  @IsString()
  @IsNotEmpty()
  ChoosePatientTypeToSearch: string;

  @IsString()
  @IsNotEmpty()
  EnterID: string;

  @IsString()
  @IsNotEmpty()
  GeneralClinic: string;

  @IsString()
  @IsNotEmpty()
  ReproductivePatients: string;

  @IsString()
  @IsNotEmpty()
  ChildrenPatients: string;

  @IsString()
  @IsNotEmpty()
  AddPatient: string;

  @IsString()
  @IsNotEmpty()
  Sex: string;

  @IsString()
  @IsNotEmpty()
  PhysicianName: string;

  @IsString()
  @IsNotEmpty()
  Actions: string;

  @IsString()
  @IsNotEmpty()
  PatientName: string;

  @IsString()
  @IsNotEmpty()
  Nationality: string;

  @IsString()
  @IsNotEmpty()
  Address: string;

  @IsString()
  @IsNotEmpty()
  DOB: string;

  @IsString()
  @IsNotEmpty()
  Disability: string;

  @IsString()
  @IsNotEmpty()
  ReasonOfDisability: string;

  @IsString()
  @IsNotEmpty()
  Height: string;

  @IsString()
  @IsNotEmpty()
  Weight: string;

  @IsString()
  @IsNotEmpty()
  SugarTest: string;

  @IsString()
  @IsNotEmpty()
  BloodPressure: string;

  @IsString()
  @IsNotEmpty()
  VisitReason: string;

  @IsString()
  @IsNotEmpty()
  Diagnoses: string;

  @IsString()
  @IsNotEmpty()
  ServiceIntroduction: string;

  @IsString()
  @IsNotEmpty()
  Refferal: string;

  @IsString()
  @IsNotEmpty()
  Remarks: string;

  @IsString()
  @IsNotEmpty()
  MaritalStatus: string;

  @IsString()
  @IsNotEmpty()
  DateOfLasMenstruation: string;

  @IsString()
  @IsNotEmpty()
  DateOfLastBirth: string;

  @IsString()
  @IsNotEmpty()
  MarriageAge: string;

  @IsString()
  @IsNotEmpty()
  NumberOfChildren: string;

  @IsString()
  @IsNotEmpty()
  PrevioseAbortion: string;

  @IsString()
  @IsNotEmpty()
  WasBirthNormal: string;

  @IsString()
  @IsNotEmpty()
  Contraceptives: string;

  @IsString()
  @IsNotEmpty()
  IronInspection: string;

  @IsString()
  @IsNotEmpty()
  PatientManagementPortal: string;

  @IsString()
  @IsNotEmpty()
  TodaysDate: string;
}
