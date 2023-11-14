import { IsEmail, IsNumber, IsString, IsStrongPassword } from "class-validator";


export class CreateClinicDto {

    @IsString()
    clinicName: string

    @IsNumber()
    cityId: number



}
