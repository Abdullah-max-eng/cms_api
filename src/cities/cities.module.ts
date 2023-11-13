import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './entities/city.entity';

@Module({
  imports:[SequelizeModule.forFeature([City])],
  controllers: [CitiesController],
  providers: [CitiesService]
})
export class CitiesModule {}
