import { Module } from '@nestjs/common';
import { MedicationService } from './medication.service';
import { MedicationController } from './medication.controller';
import { Medication } from './entities/medication.entity';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports:[SequelizeModule.forFeature([Medication])],
  controllers: [MedicationController],
  providers: [MedicationService]
})
export class MedicationModule {}
