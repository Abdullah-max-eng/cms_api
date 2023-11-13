import { Module } from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { ClinicsController } from './clinics.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Clinic } from './entities/clinic.entity';
@Module({
  imports:[SequelizeModule.forFeature([Clinic])],
  controllers: [ClinicsController],
  providers: [ClinicsService]
})
export class ClinicsModule {}
