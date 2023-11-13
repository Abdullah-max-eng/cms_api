import { Test, TestingModule } from '@nestjs/testing';
import { DataEntrantsService } from './data-entrants.service';

describe('DataEntrantsService', () => {
  let service: DataEntrantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataEntrantsService],
    }).compile();

    service = module.get<DataEntrantsService>(DataEntrantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
