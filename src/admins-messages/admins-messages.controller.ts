import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminsMessagesService } from './admins-messages.service';
import { CreateAdminsMessageDto } from './dto/create-admins-message.dto';
import { UpdateAdminsMessageDto } from './dto/update-admins-message.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('Admins Message')
@ApiBearerAuth()
@Controller('admins-messages')
export class AdminsMessagesController {
  constructor(private readonly adminsMessagesService: AdminsMessagesService) {}

  @Post()
  create(@Body() createAdminsMessageDto: CreateAdminsMessageDto) {
    return this.adminsMessagesService.create(createAdminsMessageDto);
  }

  @Get()
  findAll() {
    return this.adminsMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminsMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminsMessageDto: UpdateAdminsMessageDto) {
    return this.adminsMessagesService.update(+id, updateAdminsMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsMessagesService.remove(+id);
  }
}
