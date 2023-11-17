import { Test, TestingModule } from '@nestjs/testing';
import { ReasonToVisitService } from './reason-to-visit.service';

describe('ReasonToVisitService', () => {
  let service: ReasonToVisitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReasonToVisitService],
    }).compile();

    service = module.get<ReasonToVisitService>(ReasonToVisitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
