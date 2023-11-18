import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFeeDto {
  @IsNotEmpty()
  @IsNumber()
  PayableFee: number;

  @IsNotEmpty()
  @IsNumber()
  collectedFee: number;

  @IsOptional()
  @IsString()
  PaymentDate: string;














  
  @IsOptional()
  @IsNumber()
  ReproductivePatientID?: number;
  @IsOptional()
  @IsNumber()
  PublicPatientID?: number;
  @IsOptional()
  @IsNumber()
  ChildrenPatientID?: number;
  

}
