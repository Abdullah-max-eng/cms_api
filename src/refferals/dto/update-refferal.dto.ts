import { PartialType } from '@nestjs/mapped-types';
import { CreateRefferalDto } from './create-refferal.dto';

export class UpdateRefferalDto extends PartialType(CreateRefferalDto) {}
