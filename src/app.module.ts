import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { StatusModule } from './status/status.module';
import { ProjectModule } from './project/project.module';
import { TransactionTypeModule } from './transaction_type/transaction_type.module';

@Module({
  imports: [UserModule, TransactionModule, StatusModule, ProjectModule, TransactionTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
