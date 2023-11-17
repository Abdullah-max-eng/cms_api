import { PartialType } from '@nestjs/mapped-types';
import { CreateChildrenPatientDto } from './create-children-patient.dto';

export class UpdateChildrenPatientDto extends PartialType(CreateChildrenPatientDto) {}
