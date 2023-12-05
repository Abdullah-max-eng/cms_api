import { Test, TestingModule } from '@nestjs/testing';
import { TestRecordsController } from './test-records.controller';
import { TestRecordsService } from './test-records.service';

describe('TestRecordsController', () => {
  let controller: TestRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestRecordsController],
      providers: [TestRecordsService],
    }).compile();

    controller = module.get<TestRecordsController>(TestRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
