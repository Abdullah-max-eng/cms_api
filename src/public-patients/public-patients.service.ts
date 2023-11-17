import { Injectable } from '@nestjs/common';
import { CreatePublicPatientDto } from './dto/create-public-patient.dto';
import { UpdatePublicPatientDto } from './dto/update-public-patient.dto';

@Injectable()
export class PublicPatientsService {
  create(createPublicPatientDto: CreatePublicPatientDto) {
    return 'This action adds a new publicPatient';
  }

  findAll() {
    return `This action returns all publicPatients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publicPatient`;
  }

  update(id: number, updatePublicPatientDto: UpdatePublicPatientDto) {
    return `This action updates a #${id} publicPatient`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicPatient`;
  }
}
