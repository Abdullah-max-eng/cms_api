import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataEntrantsService } from './data-entrants.service';
import { CreateDataEntrantDto } from './dto/create-data-entrant.dto';
import { UpdateDataEntrantDto } from './dto/update-data-entrant.dto';

@Controller('data-entrants')
export class DataEntrantsController {
  constructor(private readonly dataEntrantsService: DataEntrantsService) {}

  @Post()
  create(@Body() createDataEntrantDto: CreateDataEntrantDto) {
    return this.dataEntrantsService.create(createDataEntrantDto);
  }

  @Get()
  findAll() {
    return this.dataEntrantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataEntrantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataEntrantDto: UpdateDataEntrantDto) {
    return this.dataEntrantsService.update(+id, updateDataEntrantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataEntrantsService.remove(+id);
  }
}
