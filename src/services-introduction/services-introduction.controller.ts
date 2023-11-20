import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesIntroductionService } from './services-introduction.service';
import { CreateServicesIntroductionDto } from './dto/create-services-introduction.dto';
import { UpdateServicesIntroductionDto } from './dto/update-services-introduction.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';




@ApiTags('Services for Patients')
@ApiBearerAuth()
@Controller('services-introduction')
export class ServicesIntroductionController {
  constructor(private readonly servicesIntroductionService: ServicesIntroductionService) {}

  @Post()
  create(@Body() createServicesIntroductionDto: CreateServicesIntroductionDto) {
    return this.servicesIntroductionService.create(createServicesIntroductionDto);
  }

  @Get()
  findAll() {
    return this.servicesIntroductionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesIntroductionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicesIntroductionDto: UpdateServicesIntroductionDto) {
    return this.servicesIntroductionService.update(+id, updateServicesIntroductionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesIntroductionService.remove(+id);
  }
}
