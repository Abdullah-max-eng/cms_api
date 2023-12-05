import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTestRecordDto {


    @IsOptional()
    @IsNumber()
    ReproductivePatientID?: number;
  
    
    @IsOptional()
    @IsNumber()
    PublicPatientID?: number;
  
  
  
  
  
    @IsOptional()
    @IsNumber()
    ChildrenPatientID?: number;

    @IsString()
    testName


    
}
