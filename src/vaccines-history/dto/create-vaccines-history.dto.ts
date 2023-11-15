import { IsNotEmpty, IsNumber, IsBoolean, IsString } from 'class-validator';


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




}


