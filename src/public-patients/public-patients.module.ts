import { Module } from '@nestjs/common';
import { PublicPatientsService } from './public-patients.service';
import { PublicPatientsController } from './public-patients.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PublicPatient } from './entities/public-patient.entity';

@Module({
  imports:[SequelizeModule.forFeature([PublicPatient])],
  controllers: [PublicPatientsController],
  providers: [PublicPatientsService]
})
export class PublicPatientsModule {}
