import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateDrugDto {
 
 
  @IsNotEmpty()
  @IsString()
  brandName: string;

  @IsOptional()
  @IsString()
  strength?: string;

  @IsOptional()
  @IsString()
  presentation?: string;

  @IsNotEmpty()
  @IsString()
  form: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsNumber()
  code: number;



  
}
