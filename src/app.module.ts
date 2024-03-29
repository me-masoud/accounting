import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { StatusModule } from './modules/status/status.module';
import { ProjectModule } from './modules/project/project.module';
import { TransactionTypeModule } from './modules/transaction_type/transaction_type.module';

@Module({
  imports: [UserModule, TransactionModule, StatusModule, ProjectModule, TransactionTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
