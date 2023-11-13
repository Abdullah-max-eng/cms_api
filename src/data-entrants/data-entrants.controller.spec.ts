import { Test, TestingModule } from '@nestjs/testing';
import { DataEntrantsController } from './data-entrants.controller';
import { DataEntrantsService } from './data-entrants.service';

describe('DataEntrantsController', () => {
  let controller: DataEntrantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataEntrantsController],
      providers: [DataEntrantsService],
    }).compile();

    controller = module.get<DataEntrantsController>(DataEntrantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
