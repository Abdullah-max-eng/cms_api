import { Test, TestingModule } from '@nestjs/testing';
import { VaccinesHistoryController } from './vaccines-history.controller';
import { VaccinesHistoryService } from './vaccines-history.service';

describe('VaccinesHistoryController', () => {
  let controller: VaccinesHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaccinesHistoryController],
      providers: [VaccinesHistoryService],
    }).compile();

    controller = module.get<VaccinesHistoryController>(VaccinesHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
