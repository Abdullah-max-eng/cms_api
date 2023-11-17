
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateRefferalDto {

  @IsNotEmpty()
  @IsString()
  Refferal: string;


}
