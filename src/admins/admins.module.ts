import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './entities/admin.entity';
import { AuthService } from 'src/Auth/auth.service';
import { ATStrategy, RtStrategy } from 'src/Auth/strategies';
import { JwtModule } from '@nestjs/jwt';
import { DataEntrantsService } from 'src/data-entrants/data-entrants.service';
import { DataEntrant } from 'src/data-entrants/entities/data-entrant.entity';


@Module({
  imports: [SequelizeModule.forFeature([Admin, DataEntrant]), JwtModule.register({}) ],
  controllers: [AdminsController],
  providers: [AdminsService, DataEntrantsService, AuthService, ATStrategy, RtStrategy]
})



export class AdminsModule {}
