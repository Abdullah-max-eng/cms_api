import { Test, TestingModule } from '@nestjs/testing';
import { TypesOfTestsController } from './types-of-tests.controller';
import { TypesOfTestsService } from './types-of-tests.service';

describe('TypesOfTestsController', () => {
  let controller: TypesOfTestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesOfTestsController],
      providers: [TypesOfTestsService],
    }).compile();

    controller = module.get<TypesOfTestsController>(TypesOfTestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
