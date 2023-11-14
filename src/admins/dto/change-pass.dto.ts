import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";




export class changePassDto {

    @IsString()
    currentPassword: string

    
    // @IsStrongPassword()
    @IsString()
    newPassword: string





}
