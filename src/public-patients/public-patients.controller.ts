import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublicPatientsService } from './public-patients.service';
import { CreatePublicPatientDto } from './dto/create-public-patient.dto';
import { UpdatePublicPatientDto } from './dto/update-public-patient.dto';

@Controller('public-patients')
export class PublicPatientsController {
  constructor(private readonly publicPatientsService: PublicPatientsService) {}

  @Post()
  create(@Body() createPublicPatientDto: CreatePublicPatientDto) {
    return this.publicPatientsService.create(createPublicPatientDto);
  }

  @Get()
  findAll() {
    return this.publicPatientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicPatientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublicPatientDto: UpdatePublicPatientDto) {
    return this.publicPatientsService.update(+id, updatePublicPatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicPatientsService.remove(+id);
  }
}
