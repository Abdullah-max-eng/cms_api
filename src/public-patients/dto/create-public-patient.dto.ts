import { IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';
export class CreatePublicPatientDto {
  @IsNotEmpty()
  @IsString()
  visitDate: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  DOB: string;

  @IsNotEmpty()
  @IsNumber()
  ageGroupID: number;

  @IsNotEmpty()
  @IsString()
  sex: string;

  @IsNotEmpty()
  @IsString()
  disability: string;

  @IsNotEmpty()
  @IsString()
  reasonOfDisability: string;

  @IsNotEmpty()
  @IsString()
  height: string;

  @IsNotEmpty()
  @IsString()
  heightsq: string;

  @IsNotEmpty()
  @IsString()
  weight: string;


  @IsNotEmpty()
  @IsString()
  sugarTest: string;

  @IsNotEmpty()
  @IsString()
  bloodPressure: string;

  @IsNotEmpty()
  @IsNumber()
  VisitReasonID: number;

  @IsNotEmpty()
  @IsString()
  physicianName: string;

  // Note: Depending on the actual structure of Medication, ReasonToVisit, Fee, Refferal, Clinic, DataEntrant, you may need to include nested DTOs or references.

  @IsNotEmpty()
  @IsString()
  servicesIntroduction: string;

  @IsNotEmpty()
  @IsString()
  remarks: string;

  @IsNotEmpty()
  @IsNumber()
  RefferalID: number;

  @IsNotEmpty()
  @IsNumber()
  clinicID: number;

  @IsNotEmpty()
  @IsNumber()
  DataEntrantID: number;
}
