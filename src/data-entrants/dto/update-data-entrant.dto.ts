import { PartialType } from '@nestjs/mapped-types';
import { CreateDataEntrantDto } from './create-data-entrant.dto';

export class UpdateDataEntrantDto extends PartialType(CreateDataEntrantDto) {}
