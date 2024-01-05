import { Test, TestingModule } from '@nestjs/testing';
import { AttributesLanController } from './attributes-lan.controller';
import { AttributesLanService } from './attributes-lan.service';

describe('AttributesLanController', () => {
  let controller: AttributesLanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttributesLanController],
      providers: [AttributesLanService],
    }).compile();

    controller = module.get<AttributesLanController>(AttributesLanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
