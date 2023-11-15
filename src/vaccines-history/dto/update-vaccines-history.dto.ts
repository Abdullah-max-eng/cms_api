import { PartialType } from '@nestjs/mapped-types';
import { CreateVaccinesHistoryDto } from './create-vaccines-history.dto';

export class UpdateVaccinesHistoryDto extends PartialType(CreateVaccinesHistoryDto) {}
