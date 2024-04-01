import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { StatusModule } from './modules/status/status.module';
import { ProjectModule } from './modules/project/project.module';
import { TransactionTypeModule } from './modules/transaction_type/transaction_type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBanksModule } from './modules/user_banks/user_banks.module';
import config from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    TransactionModule,
    StatusModule,
    ProjectModule,
    TransactionTypeModule,
    UserBanksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
