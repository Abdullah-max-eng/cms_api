import { IsNotEmpty, IsString } from 'class-validator';


export class CreateDiagnosisDto {


    @IsNotEmpty()
    @IsString()
    diagnoses: string;




}
