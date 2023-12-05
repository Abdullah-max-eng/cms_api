import { Test, TestingModule } from '@nestjs/testing';
import { TypesOfTestsService } from './types-of-tests.service';

describe('TypesOfTestsService', () => {
  let service: TypesOfTestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesOfTestsService],
    }).compile();

    service = module.get<TypesOfTestsService>(TypesOfTestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
