import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReasonToVisitService } from './reason-to-visit.service';
import { CreateReasonToVisitDto } from './dto/create-reason-to-visit.dto';
import { UpdateReasonToVisitDto } from './dto/update-reason-to-visit.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';



@ApiTags('Reasons to Visit')
@ApiBearerAuth()
@Controller('reason-to-visit')
export class ReasonToVisitController {
  constructor(private readonly reasonToVisitService: ReasonToVisitService) {}

  @Post()
  create(@Body() createReasonToVisitDto: CreateReasonToVisitDto) {
    return this.reasonToVisitService.create(createReasonToVisitDto);
  }

  @Get()
  findAll() {
    return this.reasonToVisitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reasonToVisitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReasonToVisitDto: UpdateReasonToVisitDto) {
    return this.reasonToVisitService.update(+id, updateReasonToVisitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reasonToVisitService.remove(+id);
  }
}
