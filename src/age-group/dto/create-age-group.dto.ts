
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateAgeGroupDto {

  @IsNotEmpty()
  @IsString()
  ageGroup: string;


}
