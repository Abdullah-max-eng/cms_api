import { Module } from '@nestjs/common';
import { VaccinesHistoryService } from './vaccines-history.service';
import { VaccinesHistoryController } from './vaccines-history.controller';

@Module({
  controllers: [VaccinesHistoryController],
  providers: [VaccinesHistoryService]
})
export class VaccinesHistoryModule {}
