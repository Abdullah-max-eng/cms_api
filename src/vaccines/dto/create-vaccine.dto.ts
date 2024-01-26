import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateVaccineDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsNumber()
  doses: number;

  @IsOptional()
  @IsString()
  price?: string;
}
