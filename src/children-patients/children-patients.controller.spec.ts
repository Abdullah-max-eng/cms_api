import { Test, TestingModule } from '@nestjs/testing';
import { ChildrenPatientsController } from './children-patients.controller';
import { ChildrenPatientsService } from './children-patients.service';

describe('ChildrenPatientsController', () => {
  let controller: ChildrenPatientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChildrenPatientsController],
      providers: [ChildrenPatientsService],
    }).compile();

    controller = module.get<ChildrenPatientsController>(ChildrenPatientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
