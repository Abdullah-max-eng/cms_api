import { Test, TestingModule } from '@nestjs/testing';
import { AttributesLanService } from './attributes-lan.service';

describe('AttributesLanService', () => {
  let service: AttributesLanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttributesLanService],
    }).compile();

    service = module.get<AttributesLanService>(AttributesLanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
