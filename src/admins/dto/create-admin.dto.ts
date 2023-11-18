import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";



export class CreateAdminDto {

    @ApiProperty({
        description: "Name of the admin",
        example: "Hamza"  
    })

    @IsString()
    username: string

    





    @ApiProperty({
        description: "password of the admin",
        example: "Hamza@123"
          
    })
    // @IsStrongPassword()
    @IsString()
    password: string






    @ApiProperty({
        description: "Email of the Admin",
        example: "Hamza@gmail.com"
          
    })
    @IsEmail()
    @IsString()
    email: string




}
