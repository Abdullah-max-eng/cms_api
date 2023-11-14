import { Module } from '@nestjs/common';
import { DataEntrantsService } from './data-entrants.service';
import { DataEntrantsController } from './data-entrants.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DataEntrant } from './entities/data-entrant.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/Auth/auth.service';
import { ATStrategy, RtStrategy } from 'src/Auth/strategies';
import { AdminsModule } from 'src/admins/admins.module';
import { AdminsService } from 'src/admins/admins.service';
import { Admin } from 'src/admins/entities/admin.entity';

@Module({
  imports: [SequelizeModule.forFeature([DataEntrant, Admin]), JwtModule.register({})],
  controllers: [DataEntrantsController],
  providers: [DataEntrantsService, AdminsService, AuthService, ATStrategy, RtStrategy]
})
export class DataEntrantsModule {}
