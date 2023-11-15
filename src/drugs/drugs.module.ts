import { Module } from '@nestjs/common';
import { DrugsService } from './drugs.service';
import { DrugsController } from './drugs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Drug } from './entities/drug.entity';

@Module({
  imports: [SequelizeModule.forFeature([Drug])],
  controllers: [DrugsController],
  providers: [DrugsService]
})
export class DrugsModule {}
