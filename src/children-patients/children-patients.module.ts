import { Module } from '@nestjs/common';
import { ChildrenPatientsService } from './children-patients.service';
import { ChildrenPatientsController } from './children-patients.controller';

@Module({
  controllers: [ChildrenPatientsController],
  providers: [ChildrenPatientsService]
})
export class ChildrenPatientsModule {}
