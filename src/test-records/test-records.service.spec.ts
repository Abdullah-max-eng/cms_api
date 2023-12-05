import { Test, TestingModule } from '@nestjs/testing';
import { TestRecordsService } from './test-records.service';

describe('TestRecordsService', () => {
  let service: TestRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestRecordsService],
    }).compile();

    service = module.get<TestRecordsService>(TestRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
