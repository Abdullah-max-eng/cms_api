import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeesService } from './fees.service';
import { CreateFeeDto } from './dto/create-fee.dto';
import { UpdateFeeDto } from './dto/update-fee.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';




@ApiTags("Patients fee Recrods")
@ApiBearerAuth()
@Controller('fees')
export class FeesController {
  constructor(private readonly feesService: FeesService) {}



  @Post()
  create(@Body() createFeeDto: CreateFeeDto) {
    return this.feesService.create(createFeeDto);
  }

  @Get()
  findAll() {
    return this.feesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feesService.findOne(+id);
  }






  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeeDto: UpdateFeeDto) {
    return this.feesService.update(+id, updateFeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feesService.remove(+id);
  }



  @Delete('/PP/:id')
  removeAllFeeRecordsOnBasedOnPPID(@Param('id') id: string) {
    return this.feesService.removeAllBasedOnPPID(+id);
  }




  @Delete('/RP/:id')
  removeAllFeeRecordsOnBasedOnRPID(@Param('id') id: string) {
    return this.feesService.removeAllBasedOnRPID(+id);
  }




  @Delete('/CP/:id')
  removeAllFeeRecordsOnBasedOnCPID(@Param('id') id: string) {
    return this.feesService.removeAllBasedOnCPID(+id);
  }


}
