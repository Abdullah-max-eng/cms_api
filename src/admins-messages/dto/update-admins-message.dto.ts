import { PartialType } from '@nestjs/swagger';
import { CreateAdminsMessageDto } from './create-admins-message.dto';

export class UpdateAdminsMessageDto extends PartialType(CreateAdminsMessageDto) {}
