import { Module } from '@nestjs/common';
import { TypesOfTestsService } from './types-of-tests.service';
import { TypesOfTestsController } from './types-of-tests.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import {TypesOfTest} from '../types-of-tests/entities/types-of-test.entity'
@Module({
  imports:[SequelizeModule.forFeature([TypesOfTest])],
  controllers: [TypesOfTestsController],
  providers: [TypesOfTestsService]
})
export class TypesOfTestsModule {}
