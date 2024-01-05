import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttributesLanService } from './attributes-lan.service';
import { CreateAttributesLanDto } from './dto/create-attributes-lan.dto';
import { UpdateAttributesLanDto } from './dto/update-attributes-lan.dto';

@Controller('attributes-lan')
export class AttributesLanController {
  constructor(private readonly attributesLanService: AttributesLanService) {}



  @Post()
  create(@Body() createAttributesLanDto: CreateAttributesLanDto) {
    return this.attributesLanService.create(createAttributesLanDto);
  }







  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributesLanService.findOne(+id);
  }




  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttributesLanDto: UpdateAttributesLanDto) {
    return this.attributesLanService.update(+id, updateAttributesLanDto);
  }




}
