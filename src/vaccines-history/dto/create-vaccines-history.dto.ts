import { IsNotEmpty, IsNumber, IsBoolean, IsString, IsOptional } from 'class-validator';


export class CreateVaccinesHistoryDto {


        @IsOptional()
        @IsString()
        firstDoseDate: string;

        @IsOptional()
        @IsNumber()
        numberOfTakenDoses: number;

        @IsOptional()
        @IsBoolean()
        vaccinationStatus: boolean;

        @IsOptional()
        comments: string;

        @IsOptional()
        @IsNumber()
        vaccineId: number;


        @IsOptional()
        @IsNumber()
        ReproductivePatientID?: number


        @IsOptional()
        @IsNumber()
        PublicPatientID?: number;



        
        @IsOptional()
        @IsNumber()
        ChildrenPatientID?: number;

        



}


