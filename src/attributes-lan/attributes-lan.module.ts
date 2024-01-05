import { Module } from '@nestjs/common';
import { AttributesLanService } from './attributes-lan.service';
import { AttributesLanController } from './attributes-lan.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttributesLan } from './entities/attributes-lan.entity';

@Module({
  imports: [SequelizeModule.forFeature([AttributesLan])],
  controllers: [AttributesLanController],
  providers: [AttributesLanService]
})
export class AttributesLanModule {}
