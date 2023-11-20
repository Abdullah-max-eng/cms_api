import { Test, TestingModule } from '@nestjs/testing';
import { AdminsMessagesService } from './admins-messages.service';

describe('AdminsMessagesService', () => {
  let service: AdminsMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminsMessagesService],
    }).compile();

    service = module.get<AdminsMessagesService>(AdminsMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
