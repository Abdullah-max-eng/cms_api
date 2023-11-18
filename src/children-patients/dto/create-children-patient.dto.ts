import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateChildrenPatientDto {

  @ApiProperty({
    description: 'Visit date of the patient',
    example: '2023-11-18',
  })
  @IsOptional()
  @IsString()
  visitDate: string;




  @ApiProperty({
    description: 'Children Patient name',
    example: 'John Doe',
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
    example: '2005-01-01',
  })
  @IsNotEmpty()
  @IsString()
  DOB: string;





  @ApiProperty({
    description: 'Age Group ID',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  ageGroupID: number;





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
    example: '120',
  })
  @IsNotEmpty()
  @IsString()
  height: string;




  @ApiProperty({
    description: 'Height square of the patient',
    example: '14400',
  })
  @IsNotEmpty()
  @IsString()
  heightsq: string;




  @ApiProperty({
    description: 'Weight of the patient',
    example: '25',
  })
  @IsNotEmpty()
  @IsString()
  weight: string;







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
    example: 'Pediatric Checkup',
  })
  @IsNotEmpty()
  @IsString()
  servicesIntroduction: string;





  @ApiProperty({
    description: 'Referral ID',
    example: 3,
  })
  @IsNotEmpty()
  @IsNumber()
  RefferalID: number;





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





  @ApiProperty({
    description: 'Remarks about the patient',
    example: 'No specific remarks',
  })
  @IsNotEmpty()
  @IsString()
  remarks: string;





}
