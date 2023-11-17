import { Module } from '@nestjs/common';
import { AgeGroupService } from './age-group.service';
import { AgeGroupController } from './age-group.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AgeGroup } from './entities/age-group.entity';

@Module({
  imports: [SequelizeModule.forFeature([AgeGroup])],
  controllers: [AgeGroupController],
  providers: [AgeGroupService]
})
export class AgeGroupModule {}
