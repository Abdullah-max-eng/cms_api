import { PartialType } from '@nestjs/mapped-types';
import { CreateMediccationDto } from './create-medication.dto';

export class UpdateMedicationDto extends PartialType(CreateMediccationDto) {}
