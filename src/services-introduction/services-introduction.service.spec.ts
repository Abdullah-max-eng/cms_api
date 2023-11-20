import { Test, TestingModule } from '@nestjs/testing';
import { ServicesIntroductionService } from './services-introduction.service';

describe('ServicesIntroductionService', () => {
  let service: ServicesIntroductionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicesIntroductionService],
    }).compile();

    service = module.get<ServicesIntroductionService>(ServicesIntroductionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
