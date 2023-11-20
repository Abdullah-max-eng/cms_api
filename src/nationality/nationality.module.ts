import { Module } from '@nestjs/common';
import { NationalityService } from './nationality.service';
import { NationalityController } from './nationality.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Nationality } from './entities/nationality.entity';


@Module({
  imports: [SequelizeModule.forFeature([Nationality])],
  controllers: [NationalityController],
  providers: [NationalityService]
})




export class NationalityModule {}
