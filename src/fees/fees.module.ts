import { Module } from '@nestjs/common';
import { FeesService } from './fees.service';
import { FeesController } from './fees.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Fee } from './entities/fee.entity';

@Module({
  imports:[SequelizeModule.forFeature([Fee])],
  controllers: [FeesController],
  providers: [FeesService]
})
export class FeesModule {}
