import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";




export class SignInDTo {
    
    // @IsStrongPassword()
    @IsString()
    password: string


    @IsEmail()
    @IsString()
    email: string


}
