import { PartialType } from '@nestjs/swagger';
import { CreateServicesIntroductionDto } from './create-services-introduction.dto';

export class UpdateServicesIntroductionDto extends PartialType(CreateServicesIntroductionDto) {}
