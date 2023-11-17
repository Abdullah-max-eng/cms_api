import { Module } from '@nestjs/common';
import { PublicPatientsService } from './public-patients.service';
import { PublicPatientsController } from './public-patients.controller';

@Module({
  controllers: [PublicPatientsController],
  providers: [PublicPatientsService]
})
export class PublicPatientsModule {}
