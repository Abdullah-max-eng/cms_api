import { Test, TestingModule } from '@nestjs/testing';
import { ReasonToVisitController } from './reason-to-visit.controller';
import { ReasonToVisitService } from './reason-to-visit.service';

describe('ReasonToVisitController', () => {
  let controller: ReasonToVisitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReasonToVisitController],
      providers: [ReasonToVisitService],
    }).compile();

    controller = module.get<ReasonToVisitController>(ReasonToVisitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
