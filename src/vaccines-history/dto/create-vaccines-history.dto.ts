import { IsNotEmpty, IsNumber, IsBoolean, IsString, IsOptional } from 'class-validator';


export class CreateVaccinesHistoryDto {


        @IsNotEmpty()
        @IsString()
        firstDoseDate: string;

        @IsNotEmpty()
        @IsNumber()
        numberOfTakenDoses: number;

        @IsNotEmpty()
        @IsBoolean()
        vaccinationStatus: boolean;

        @IsString()
        comments: string;

        @IsNotEmpty()
        @IsNumber()
        vaccineId: number;


        @IsOptional()
        @IsNumber()
        ReproductivePatientID?: number


        @IsOptional()
        @IsNumber()
        PublicPatientID?: number;



}


