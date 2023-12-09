import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestRecordsService } from './test-records.service';
import { CreateTestRecordDto } from './dto/create-test-record.dto';
import { UpdateTestRecordDto } from './dto/update-test-record.dto';

@Controller('test-records')
export class TestRecordsController {
  constructor(private readonly testRecordsService: TestRecordsService) {}

  @Post()
  create(@Body() createTestRecordDto: CreateTestRecordDto) {
    return this.testRecordsService.create(createTestRecordDto);
  }

  @Get()
  findAll() {
    return this.testRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestRecordDto: UpdateTestRecordDto) {
    return this.testRecordsService.update(+id, updateTestRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testRecordsService.remove(+id);
  }


  @Delete('/PP/:id')
  removeAllRecordsBasedOnPatientID(@Param('id') id: string) {
    return this.testRecordsService.removeAllBasedOnPPID(+id);
  }



  @Delete('/PP/DeleteTestResult/:id')
  removeTestResultOfPP(@Param('id') id: string) {
    return this.testRecordsService.removeTestResultOfTestRecord(+id);
  }


  
}
