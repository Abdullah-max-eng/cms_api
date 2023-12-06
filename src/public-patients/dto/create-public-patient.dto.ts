import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNumber, IsDate, IsNotEmpty, IsOptional, IsObject } from 'class-validator';
import { DataTypes } from 'sequelize';
import { Column } from 'sequelize-typescript';

export class CreatePublicPatientDto {
  @ApiProperty({
    description: 'Visit date of the patient (Default is the current Date )',
    example: '2023-11-18',
  })
  @IsOptional()
  @IsString()
  visitDate: string;




  @ApiProperty({
    description: 'Public Patient name',
    example: 'Hamza',
  })
  @IsNotEmpty()
  @IsString()
  name: string;




  @ApiProperty({
    description: 'Nationality of the patient',
    example: 'US',
  })
  @IsNotEmpty()
  @IsString()
  nationality: string;




  @ApiProperty({
    description: 'Address of the patient',
    example: '123 Main St, City',
  })
  @IsNotEmpty()
  @IsString()
  address: string;




  @ApiProperty({
    description: 'Date of Birth of the patient',
    example: '1990-01-01',
  })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  @Column({ allowNull: false, type: DataTypes.DATE })
  DOB: Date;




  // @ApiProperty({
  //   description: 'Age Group ID',
  //   example: 1,
  // })
  // @IsNotEmpty()
  // @IsNumber()
  // ageGroupID: number;



    @ApiProperty({
    description: 'Age Group ID',
    example: '10 -20',
  })
  @IsNotEmpty()
  @IsString()
  ageGroup: string;


  





  @ApiProperty({
    description: 'Sex of the patient',
    example: 'Male',
  })
  @IsNotEmpty()
  @IsString()
  sex: string;






  @ApiProperty({
    description: 'Disability status of the patient',
    example: 'No',
  })
  @IsNotEmpty()
  @IsString()
  disability: string;





  @ApiProperty({
    description: 'Reason of Disability',
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  reasonOfDisability: string;





  @ApiProperty({
    description: 'Height of the patient',
    example: '180',
  })
  @IsNotEmpty()
  @IsString()
  height: string;





  // @ApiProperty({
  //   description: 'Height square of the patient',
  //   example: '32400',
  // })
  // @IsNotEmpty()
  // @IsString()
  // heightsq: string;







  @ApiProperty({
    description: 'Weight of the patient',
    example: '75',
  })
  @IsNotEmpty()
  @IsString()
  weight: string;






  @ApiProperty({
    description: 'Diagnoses',
    example: '[Diagnose1, Diagnose2]',
  })
  @IsNotEmpty()
  @IsString()
  diagnoses: string;




  @ApiProperty({
    description: 'Sugar test result of the patient',
    example: 'Normal',
  })
  @IsNotEmpty()
  @IsString()
  sugarTest: string;





  @ApiProperty({
    description: 'Blood pressure of the patient',
    example: '120/80',
  })
  @IsNotEmpty()
  @IsString()
  bloodPressure: string;






  @ApiProperty({
    description: 'Visit Reason ID',
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  VisitReasonID: number;





  
  @ApiProperty({
    description: 'Physician name',
    example: 'Dr. Smith',
  })
  @IsNotEmpty()
  @IsString()
  physicianName: string;





  @ApiProperty({
    description: 'Services introduction',
    example: 'Medical Checkup',
  })
  @IsNotEmpty()
  @IsString()
  servicesIntroduction: string;






  @ApiProperty({
    description: 'Remarks about the patient',
    example: 'No specific remarks',
  })
  @IsNotEmpty()
  @IsString()
  remarks: string;






  // @ApiProperty({
  //   description: 'Referral ID',
  //   example: 3,
  // })
  // @IsNotEmpty()
  // @IsNumber()
  // RefferalID: number;


  @ApiProperty({
    description: 'Referral',
    example: "Friend",
  })

  @IsNotEmpty()
  @IsString()
  refferal: string;







  @ApiProperty({
    description: 'Clinic ID',
    example: 4,
  })
  @IsNotEmpty()
  @IsNumber()
  clinicID: number;






  @ApiProperty({
    description: 'Data Entrant ID',
    example: 5,
  })
  @IsNotEmpty()
  @IsNumber()
  DataEntrantID: number;



  
}
