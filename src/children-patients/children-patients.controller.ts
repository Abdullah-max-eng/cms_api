import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChildrenPatientsService } from './children-patients.service';
import { CreateChildrenPatientDto } from './dto/create-children-patient.dto';
import { UpdateChildrenPatientDto } from './dto/update-children-patient.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';



@ApiTags("Children Patients Registration")
@ApiBearerAuth()
@Controller('children-patients')
export class ChildrenPatientsController {

  
  constructor(private readonly childrenPatientsService: ChildrenPatientsService) {}



  @Post()
  create(@Body() createChildrenPatientDto: CreateChildrenPatientDto) {
    return this.childrenPatientsService.create(createChildrenPatientDto);
  }




  @Get()
  findAll() {
    return this.childrenPatientsService.findAll();
  }






  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.childrenPatientsService.findOne(+id);
  }





  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChildrenPatientDto: UpdateChildrenPatientDto) {
    return this.childrenPatientsService.update(+id, updateChildrenPatientDto);
  }




  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.childrenPatientsService.remove(+id);
  }




}
