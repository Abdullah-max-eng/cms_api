import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesOfTestsService } from './types-of-tests.service';
import { CreateTypesOfTestDto } from './dto/create-types-of-test.dto';
import { UpdateTypesOfTestDto } from './dto/update-types-of-test.dto';

@Controller('types-of-tests')
export class TypesOfTestsController {
  constructor(private readonly typesOfTestsService: TypesOfTestsService) {}

  @Post()
  create(@Body() createTypesOfTestDto: CreateTypesOfTestDto) {
    return this.typesOfTestsService.create(createTypesOfTestDto);
  }

  @Get()
  findAll() {
    return this.typesOfTestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesOfTestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypesOfTestDto: UpdateTypesOfTestDto) {
    return this.typesOfTestsService.update(+id, updateTypesOfTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesOfTestsService.remove(+id);
  }
}
