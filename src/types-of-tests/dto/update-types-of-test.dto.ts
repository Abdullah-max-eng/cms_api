import { PartialType } from '@nestjs/swagger';
import { CreateTypesOfTestDto } from './create-types-of-test.dto';

export class UpdateTypesOfTestDto extends PartialType(CreateTypesOfTestDto) {}
