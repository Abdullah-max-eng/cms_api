import { IsEmail, IsString, IsStrongPassword } from "class-validator";



export class CreateAdminDto {






    @IsString()
    username: string




    
    @IsStrongPassword()
    @IsString()
    password: string





    @IsEmail()
    @IsString()
    email: string




}
