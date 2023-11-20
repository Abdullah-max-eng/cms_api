import { Module } from '@nestjs/common';
import { AdminsMessagesService } from './admins-messages.service';
import { AdminsMessagesController } from './admins-messages.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminsMessage } from './entities/admins-message.entity';

@Module({
  imports: [SequelizeModule.forFeature([AdminsMessage])],
  controllers: [AdminsMessagesController],
  providers: [AdminsMessagesService]
})
export class AdminsMessagesModule {}
