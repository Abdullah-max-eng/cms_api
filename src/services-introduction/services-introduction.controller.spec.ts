import { Test, TestingModule } from '@nestjs/testing';
import { ServicesIntroductionController } from './services-introduction.controller';
import { ServicesIntroductionService } from './services-introduction.service';

describe('ServicesIntroductionController', () => {
  let controller: ServicesIntroductionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesIntroductionController],
      providers: [ServicesIntroductionService],
    }).compile();

    controller = module.get<ServicesIntroductionController>(ServicesIntroductionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
