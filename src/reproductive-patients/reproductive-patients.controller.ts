import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReproductivePatientsService } from './reproductive-patients.service';
import { CreateReproductivePatientDto } from './dto/create-reproductive-patient.dto';
import { UpdateReproductivePatientDto } from './dto/update-reproductive-patient.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';



@ApiTags('REproductive Patients')
@ApiBearerAuth()
@Controller('reproductive-patients')
export class ReproductivePatientsController {
  constructor(private readonly reproductivePatientsService: ReproductivePatientsService) {}

  @Post()
  create(@Body() createReproductivePatientDto: CreateReproductivePatientDto) {
    return this.reproductivePatientsService.create(createReproductivePatientDto);
  }

  @Get()
  findAll() {
    return this.reproductivePatientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reproductivePatientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReproductivePatientDto: UpdateReproductivePatientDto) {
    return this.reproductivePatientsService.update(+id, updateReproductivePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reproductivePatientsService.remove(+id);
  }
}
