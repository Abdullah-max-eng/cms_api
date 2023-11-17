import { Module } from '@nestjs/common';
import { ReasonToVisitService } from './reason-to-visit.service';
import { ReasonToVisitController } from './reason-to-visit.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReasonToVisit } from './entities/reason-to-visit.entity';

@Module({
  imports:[SequelizeModule.forFeature([ReasonToVisit])],
  controllers: [ReasonToVisitController],
  providers: [ReasonToVisitService]
})
export class ReasonToVisitModule {}
