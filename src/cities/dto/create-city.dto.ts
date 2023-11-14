import { IsEmail, IsNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateCityDto {
    @IsString()
    countryName: string


    @IsString()
    cityname: string
}
