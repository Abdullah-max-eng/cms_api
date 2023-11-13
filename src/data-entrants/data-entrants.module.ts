import { Module } from '@nestjs/common';
import { DataEntrantsService } from './data-entrants.service';
import { DataEntrantsController } from './data-entrants.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DataEntrant } from './entities/data-entrant.entity';

@Module({
  imports: [SequelizeModule.forFeature([DataEntrant])],
  controllers: [DataEntrantsController],
  providers: [DataEntrantsService]
})
export class DataEntrantsModule {}
