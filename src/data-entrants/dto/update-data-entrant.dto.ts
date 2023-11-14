import { PartialType } from '@nestjs/mapped-types';
import { CreateDataEntrantDto } from './create-data-entrant.dto';
import { IsOptional } from 'class-validator';

export class UpdateDataEntrantDto extends PartialType(CreateDataEntrantDto) {
    @IsOptional()
    Hashedrt: string
}
