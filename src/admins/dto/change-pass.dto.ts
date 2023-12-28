import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";




export class changePassDto {



    
    // @IsStrongPassword()
    @IsString()
    newPassword: string





}
