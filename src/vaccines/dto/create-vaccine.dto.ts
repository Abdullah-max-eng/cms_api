import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateVaccineDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  doses: number;

  @IsOptional()
  @IsString()
  price?: string;
}
