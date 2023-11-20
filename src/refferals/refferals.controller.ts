import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RefferalsService } from './refferals.service';
import { CreateRefferalDto } from './dto/create-refferal.dto';
import { UpdateRefferalDto } from './dto/update-refferal.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';




@ApiTags('Refferals for patients')
@ApiBearerAuth()
@Controller('refferals')
export class RefferalsController {
  constructor(private readonly refferalsService: RefferalsService) {}

  @Post()
  create(@Body() createRefferalDto: CreateRefferalDto) {
    return this.refferalsService.create(createRefferalDto);
  }

  @Get()
  findAll() {
    return this.refferalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refferalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefferalDto: UpdateRefferalDto) {
    return this.refferalsService.update(+id, updateRefferalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refferalsService.remove(+id);
  }
}
