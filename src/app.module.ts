import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminsModule } from './admins/admins.module';
import { CitiesModule } from './cities/cities.module';
import { ClinicsModule } from './clinics/clinics.module';
import { DataEntrantsModule } from './data-entrants/data-entrants.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { DrugsModule } from './drugs/drugs.module';
import { VaccinesModule } from './vaccines/vaccines.module';
import { MedicationModule } from './medication/medication.module';
import { VaccinesHistoryModule } from './vaccines-history/vaccines-history.module';

@Module({
  imports: [


    ConfigModule.forRoot({
      isGlobal: true,
    }),





    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: true,
        autoLoadModels: true,
        sync: {
          alter: true,
          // force: true,
        },
        models: [],
      }),
      inject: [ConfigService],
    }),





    AdminsModule,
    CitiesModule,
    ClinicsModule,
    DataEntrantsModule,
    DrugsModule,
    VaccinesModule,
    MedicationModule,
    VaccinesHistoryModule,











  ],

  
  controllers: [AppController],
  providers: [AppService,    {
    provide: APP_GUARD,
    useClass: AtGuard
    },],
})
export class AppModule {}
