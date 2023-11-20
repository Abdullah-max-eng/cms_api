import { Module } from '@nestjs/common';
import { ServicesIntroductionService } from './services-introduction.service';
import { ServicesIntroductionController } from './services-introduction.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServicesIntroduction } from './entities/services-introduction.entity';

@Module({
  imports:[ SequelizeModule.forFeature([ServicesIntroduction])],
  controllers: [ServicesIntroductionController],
  providers: [ServicesIntroductionService]
})
export class ServicesIntroductionModule {}
