import { Test, TestingModule } from '@nestjs/testing';
import { AdminsMessagesController } from './admins-messages.controller';
import { AdminsMessagesService } from './admins-messages.service';

describe('AdminsMessagesController', () => {
  let controller: AdminsMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminsMessagesController],
      providers: [AdminsMessagesService],
    }).compile();

    controller = module.get<AdminsMessagesController>(AdminsMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
