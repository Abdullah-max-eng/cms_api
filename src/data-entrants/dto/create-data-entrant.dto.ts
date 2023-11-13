import { IsEmail, IsString, IsStrongPassword } from "class-validator";



export class CreateDataEntrantDto {






    @IsString()
    username: string




    
    @IsStrongPassword()
    @IsString()
    password: string





    @IsEmail()
    @IsString()
    email: string




}




