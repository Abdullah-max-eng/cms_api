import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgeGroupService } from './age-group.service';
import { CreateAgeGroupDto } from './dto/create-age-group.dto';
import { UpdateAgeGroupDto } from './dto/update-age-group.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('Age groups of Patients')
@ApiBearerAuth()
@Controller('age-group')
export class AgeGroupController {
  constructor(private readonly ageGroupService: AgeGroupService) {}

  @Post()
  create(@Body() createAgeGroupDto: CreateAgeGroupDto) {
    return this.ageGroupService.create(createAgeGroupDto);
  }

  @Get()
  findAll() {
    return this.ageGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ageGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgeGroupDto: UpdateAgeGroupDto) {
    return this.ageGroupService.update(+id, updateAgeGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ageGroupService.remove(+id);
  }
}
