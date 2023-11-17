import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicPatientDto } from './create-public-patient.dto';

export class UpdatePublicPatientDto extends PartialType(CreatePublicPatientDto) {}
