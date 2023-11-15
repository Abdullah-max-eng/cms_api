import { Module } from '@nestjs/common';
import { VaccinesHistoryService } from './vaccines-history.service';
import { VaccinesHistoryController } from './vaccines-history.controller';
import { VaccinesHistory } from './entities/vaccines-history.entity';
import { SequelizeModule } from '@nestjs/sequelize';



@Module({
  imports:[SequelizeModule.forFeature([VaccinesHistory])],
  controllers: [VaccinesHistoryController],
  providers: [VaccinesHistoryService]
})
export class VaccinesHistoryModule {}
