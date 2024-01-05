import { PartialType } from '@nestjs/swagger';
import { CreateAttributesLanDto } from './create-attributes-lan.dto';

export class UpdateAttributesLanDto extends PartialType(CreateAttributesLanDto) {}
