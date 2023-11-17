import { Test, TestingModule } from '@nestjs/testing';
import { RefferalsService } from './refferals.service';

describe('RefferalsService', () => {
  let service: RefferalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefferalsService],
    }).compile();

    service = module.get<RefferalsService>(RefferalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
