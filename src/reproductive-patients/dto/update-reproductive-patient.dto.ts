import { PartialType } from '@nestjs/mapped-types';
import { CreateReproductivePatientDto } from './create-reproductive-patient.dto';

export class UpdateReproductivePatientDto extends PartialType(CreateReproductivePatientDto) {}
