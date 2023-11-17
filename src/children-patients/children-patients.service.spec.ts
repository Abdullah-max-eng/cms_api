import { Test, TestingModule } from '@nestjs/testing';
import { ChildrenPatientsService } from './children-patients.service';

describe('ChildrenPatientsService', () => {
  let service: ChildrenPatientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChildrenPatientsService],
    }).compile();

    service = module.get<ChildrenPatientsService>(ChildrenPatientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
