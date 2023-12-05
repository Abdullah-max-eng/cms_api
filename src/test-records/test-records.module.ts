import { Module } from '@nestjs/common';
import { TestRecordsService } from './test-records.service';
import { TestRecordsController } from './test-records.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestRecord } from './entities/test-record.entity';
@Module({
  imports: [SequelizeModule.forFeature([TestRecord])],
  controllers: [TestRecordsController],
  providers: [TestRecordsService]
})
export class TestRecordsModule {}
