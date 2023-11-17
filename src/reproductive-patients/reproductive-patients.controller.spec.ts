import { Test, TestingModule } from '@nestjs/testing';
import { ReproductivePatientsController } from './reproductive-patients.controller';
import { ReproductivePatientsService } from './reproductive-patients.service';

describe('ReproductivePatientsController', () => {
  let controller: ReproductivePatientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReproductivePatientsController],
      providers: [ReproductivePatientsService],
    }).compile();

    controller = module.get<ReproductivePatientsController>(ReproductivePatientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
