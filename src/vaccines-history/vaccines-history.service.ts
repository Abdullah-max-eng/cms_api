import { Injectable } from '@nestjs/common';
import { CreateVaccinesHistoryDto } from './dto/create-vaccines-history.dto';
import { UpdateVaccinesHistoryDto } from './dto/update-vaccines-history.dto';

@Injectable()
export class VaccinesHistoryService {
  create(createVaccinesHistoryDto: CreateVaccinesHistoryDto) {
    return 'This action adds a new vaccinesHistory';
  }

  findAll() {
    return `This action returns all vaccinesHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vaccinesHistory`;
  }

  update(id: number, updateVaccinesHistoryDto: UpdateVaccinesHistoryDto) {
    return `This action updates a #${id} vaccinesHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} vaccinesHistory`;
  }
}
