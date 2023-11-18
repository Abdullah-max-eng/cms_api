import { Module } from '@nestjs/common';
import { ChildrenPatientsService } from './children-patients.service';
import { ChildrenPatientsController } from './children-patients.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChildrenPatient } from './entities/children-patient.entity';

@Module({
  imports:[SequelizeModule.forFeature([ChildrenPatient])],
  controllers: [ChildrenPatientsController],
  providers: [ChildrenPatientsService]
})
export class ChildrenPatientsModule {}
