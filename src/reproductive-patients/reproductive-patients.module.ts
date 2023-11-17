import { Module } from '@nestjs/common';
import { ReproductivePatientsService } from './reproductive-patients.service';
import { ReproductivePatientsController } from './reproductive-patients.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReproductivePatient } from './entities/reproductive-patient.entity';

@Module({
  imports:[SequelizeModule.forFeature([ReproductivePatient])],
  controllers: [ReproductivePatientsController],
  providers: [ReproductivePatientsService]
})
export class ReproductivePatientsModule {}
