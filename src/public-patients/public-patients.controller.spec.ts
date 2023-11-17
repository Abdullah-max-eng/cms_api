import { Test, TestingModule } from '@nestjs/testing';
import { PublicPatientsController } from './public-patients.controller';
import { PublicPatientsService } from './public-patients.service';

describe('PublicPatientsController', () => {
  let controller: PublicPatientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicPatientsController],
      providers: [PublicPatientsService],
    }).compile();

    controller = module.get<PublicPatientsController>(PublicPatientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
