import { Module } from '@nestjs/common';
import { RefferalsService } from './refferals.service';
import { RefferalsController } from './refferals.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Refferal } from './entities/refferal.entity';

@Module({
  imports:[SequelizeModule.forFeature([Refferal])],
  controllers: [RefferalsController],
  providers: [RefferalsService]
})
export class RefferalsModule {}
