import { Module } from '@nestjs/common';
import { TestResultsService } from './test-results.service';
import { TestResultsController } from './test-results.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestResult } from './entities/test-result.entity';
@Module({
  imports: [SequelizeModule.forFeature([TestResult])],
  controllers: [TestResultsController],
  providers: [TestResultsService]
})
export class TestResultsModule {}
