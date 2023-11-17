import { Test, TestingModule } from '@nestjs/testing';
import { ReproductivePatientsService } from './reproductive-patients.service';

describe('ReproductivePatientsService', () => {
  let service: ReproductivePatientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReproductivePatientsService],
    }).compile();

    service = module.get<ReproductivePatientsService>(ReproductivePatientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
