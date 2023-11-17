import { Test, TestingModule } from '@nestjs/testing';
import { PublicPatientsService } from './public-patients.service';

describe('PublicPatientsService', () => {
  let service: PublicPatientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicPatientsService],
    }).compile();

    service = module.get<PublicPatientsService>(PublicPatientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
