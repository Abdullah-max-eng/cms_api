import { Test, TestingModule } from '@nestjs/testing';
import { RefferalsController } from './refferals.controller';
import { RefferalsService } from './refferals.service';

describe('RefferalsController', () => {
  let controller: RefferalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefferalsController],
      providers: [RefferalsService],
    }).compile();

    controller = module.get<RefferalsController>(RefferalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
