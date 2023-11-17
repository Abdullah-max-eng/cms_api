import { Injectable } from '@nestjs/common';
import { CreateChildrenPatientDto } from './dto/create-children-patient.dto';
import { UpdateChildrenPatientDto } from './dto/update-children-patient.dto';

@Injectable()
export class ChildrenPatientsService {
  create(createChildrenPatientDto: CreateChildrenPatientDto) {
    return 'This action adds a new childrenPatient';
  }

  findAll() {
    return `This action returns all childrenPatients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} childrenPatient`;
  }

  update(id: number, updateChildrenPatientDto: UpdateChildrenPatientDto) {
    return `This action updates a #${id} childrenPatient`;
  }

  remove(id: number) {
    return `This action removes a #${id} childrenPatient`;
  }
}
