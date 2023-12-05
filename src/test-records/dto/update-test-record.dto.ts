import { PartialType } from '@nestjs/swagger';
import { CreateTestRecordDto } from './create-test-record.dto';

export class UpdateTestRecordDto extends PartialType(CreateTestRecordDto) {}
