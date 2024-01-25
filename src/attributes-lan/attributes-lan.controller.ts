import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AttributesLanService } from './attributes-lan.service';
import { CreateAttributesLanDto } from './dto/create-attributes-lan.dto';
import { UpdateAttributesLanDto } from './dto/update-attributes-lan.dto';
import { Public } from 'src/common/decorators/public.decorators';

@Controller('attributes-lan')
export class AttributesLanController {
  constructor(private readonly attributesLanService: AttributesLanService) {}







  @Public(true)
  @Get('/prefix/:prefix')
  findOnebyPrfix(@Param('prefix') prefix: string) {
    return this.attributesLanService.findOneByPrfix(prefix);
  }
  

  
  @Public(true)
  @Get('/getPrefixes/')
  getALlPrefixes() {
    return this.attributesLanService.getAllPrefixes();
  }
  


  
  
  @Post()
  create(@Body() createAttributesLanDto: CreateAttributesLanDto) {
    return this.attributesLanService.create(createAttributesLanDto);
  }





  @Public(true)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributesLanService.findOne(+id);
  }




  

  





  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttributesLanDto: UpdateAttributesLanDto) {
    return this.attributesLanService.update(+id, updateAttributesLanDto);
  }






}
