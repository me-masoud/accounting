import { Module } from '@nestjs/common';
import { UserBanksService } from './user_banks.service';
import { UserBanksController } from './user_banks.controller';

@Module({
  controllers: [UserBanksController],
  providers: [UserBanksService],
})
export class UserBanksModule {}
