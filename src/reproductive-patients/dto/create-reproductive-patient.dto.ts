import { IsNotEmpty, IsString, IsNumber, IsDate, IsBoolean, IsOptional } from 'class-validator';

export class CreateReproductivePatientDto {
 


 
  @IsOptional()
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
  Weight: string;




  @IsNotEmpty()
  @IsString()
  MaritalStatus: string;



  @IsNotEmpty()
  @IsNumber()
  NumberOfChildren: number;



  @IsNotEmpty()
  @IsNumber()
  PreviouseAbortions: number;



  @IsNotEmpty()
  @IsString()
  DateOfLastBirth: string;



  @IsNotEmpty()
  @IsNumber()
  marriageAge: number;



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
  @IsString()
  servicesIntroduction: string;




  @IsNotEmpty()
  @IsString()
  ageGroup: string;






  @IsNotEmpty()
  @IsString()
  refferal: string;





  @IsNotEmpty()
  @IsString()
  diagnoses: string;






  @IsNotEmpty()
  @IsNumber()
  VisitReasonID: number;





    
  @IsOptional()
  @IsNumber()
  clinicID: number;



  @IsOptional()
  @IsNumber()
  DataEntrantID: number;















  



















}
