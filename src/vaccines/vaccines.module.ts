import { Module } from '@nestjs/common';
import { VaccinesService } from './vaccines.service';
import { VaccinesController } from './vaccines.controller';
import { Vaccine } from './entities/vaccine.entity';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [SequelizeModule.forFeature([Vaccine])],
  controllers: [VaccinesController],
  providers: [VaccinesService]
})
export class VaccinesModule {}
