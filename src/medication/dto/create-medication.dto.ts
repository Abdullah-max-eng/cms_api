import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateMediccationDto {
  @IsOptional()
  @IsString()
  startDate?: string;

  @IsOptional()
  @IsString()
  endDate?: string;

  @IsNotEmpty()
  @IsNumber()
  drugID: number;


  @IsNotEmpty()
  @IsNumber()
  ReproductivePatientID: number;

  
  @IsOptional()
  @IsNumber()
  PublicPatientID?: number;

  
}
