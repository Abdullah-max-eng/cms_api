import { Injectable } from '@nestjs/common';
import { CreateDataEntrantDto } from './dto/create-data-entrant.dto';
import { UpdateDataEntrantDto } from './dto/update-data-entrant.dto';

@Injectable()
export class DataEntrantsService {
  create(createDataEntrantDto: CreateDataEntrantDto) {
    return 'This action adds a new dataEntrant';
  }

  findAll() {
    return `This action returns all dataEntrants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataEntrant`;
  }

  update(id: number, updateDataEntrantDto: UpdateDataEntrantDto) {
    return `This action updates a #${id} dataEntrant`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataEntrant`;
  }
}
