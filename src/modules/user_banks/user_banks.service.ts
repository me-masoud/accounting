import { Injectable } from '@nestjs/common';
import { CreateUserBankDto } from './dto/create-user_bank.dto';
import { UpdateUserBankDto } from './dto/update-user_bank.dto';

@Injectable()
export class UserBanksService {
  create(createUserBankDto: CreateUserBankDto) {
    return 'This action adds a new userBank';
  }

  findAll() {
    return `This action returns all userBanks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userBank`;
  }

  update(id: number, updateUserBankDto: UpdateUserBankDto) {
    return `This action updates a #${id} userBank`;
  }

  remove(id: number) {
    return `This action removes a #${id} userBank`;
  }
}
