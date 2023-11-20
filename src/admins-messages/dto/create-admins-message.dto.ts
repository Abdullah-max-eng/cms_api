import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAdminsMessageDto {
    @ApiProperty({
        description: "Message from admins to data Entrants",
        example: "Hello, Do this .. . "
    })
    
    @IsString()
    message 
}
