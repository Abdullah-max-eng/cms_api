import { IsNotEmpty, IsString } from 'class-validator';
export class CreateReasonToVisitDto {

  @IsNotEmpty()
  @IsString()
  ReasonToVisit: string;


}
