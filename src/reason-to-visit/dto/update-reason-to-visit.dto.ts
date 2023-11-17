import { PartialType } from '@nestjs/mapped-types';
import { CreateReasonToVisitDto } from './create-reason-to-visit.dto';

export class UpdateReasonToVisitDto extends PartialType(CreateReasonToVisitDto) {}
