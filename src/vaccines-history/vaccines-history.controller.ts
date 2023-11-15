import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VaccinesHistoryService } from './vaccines-history.service';
import { CreateVaccinesHistoryDto } from './dto/create-vaccines-history.dto';
import { UpdateVaccinesHistoryDto } from './dto/update-vaccines-history.dto';

@Controller('vaccines-history')
export class VaccinesHistoryController {
  constructor(private readonly vaccinesHistoryService: VaccinesHistoryService) {}

  @Post()
  create(@Body() createVaccinesHistoryDto: CreateVaccinesHistoryDto) {
    return this.vaccinesHistoryService.create(createVaccinesHistoryDto);
  }

  @Get()
  findAll() {
    return this.vaccinesHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vaccinesHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVaccinesHistoryDto: UpdateVaccinesHistoryDto) {
    return this.vaccinesHistoryService.update(+id, updateVaccinesHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vaccinesHistoryService.remove(+id);
  }
}
