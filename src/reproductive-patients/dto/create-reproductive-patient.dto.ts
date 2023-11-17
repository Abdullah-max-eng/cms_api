import { IsNotEmpty, IsString, IsNumber, IsDate, IsBoolean } from 'class-validator';

export class CreateReproductivePatientDto {
  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsNotEmpty()
  @IsString()
  visitDate: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  DOB: string;

  @IsNotEmpty()
  @IsString()
  Height: string;

  @IsNotEmpty()
  @IsString()
  Heightsq: string;

  @IsNotEmpty()
  @IsString()
  Weight: string;

  // @IsNotEmpty()
  // @IsString()
  // BMI: string;

  @IsNotEmpty()
  @IsString()
  MaritalStatus: string;

  @IsNotEmpty()
  @IsNumber()
  NumberOfChildren: number;

  @IsNotEmpty()
  @IsNumber()
  PreviousAbortions: number;

  @IsNotEmpty()
  @IsString()
  DateOfLastBirth: string;

  @IsNotEmpty()
  @IsBoolean()
  NormalBirthStatus: false;

  @IsNotEmpty()
  @IsString()
  DateOfLastMenstruation: string;

  @IsNotEmpty()
  @IsString()
  contraceptives: string;

  @IsNotEmpty()
  @IsString()
  IronInspection: string;

  @IsNotEmpty()
  @IsString()
  DiabetesScreening: string;

  @IsNotEmpty()
  @IsString()
  BloodPressure: string;

  @IsNotEmpty()
  @IsString()
  physicianName: string;
  
  @IsNotEmpty()
  @IsNumber()
  DataEntrantID: number;

  @IsNotEmpty()
  @IsNumber()
  ageGroupID: number;




  @IsNotEmpty()
  @IsString()
  servicesIntroduction: string;


  @IsNotEmpty()
  @IsNumber()
  VisitReasonID: number;


  
  @IsNotEmpty()
  @IsNumber()
  clinincID: number;



  @IsNotEmpty()
  @IsNumber()
  RefferalID: number;





}
