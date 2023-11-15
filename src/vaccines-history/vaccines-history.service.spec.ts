import { Test, TestingModule } from '@nestjs/testing';
import { VaccinesHistoryService } from './vaccines-history.service';

describe('VaccinesHistoryService', () => {
  let service: VaccinesHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaccinesHistoryService],
    }).compile();

    service = module.get<VaccinesHistoryService>(VaccinesHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
