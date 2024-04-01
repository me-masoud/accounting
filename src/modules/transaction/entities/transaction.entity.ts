import { Entity } from 'typeorm';
import { IsEnum, IsNumber, isNumber, IsString } from 'class-validator';
import { TransactionType } from '../Types/transaction-types.enum';

@Entity('transactions')
export class Transaction {
  @IsString()
  title: string

  @IsString()
  description: string

  @IsEnum(TransactionType)
  type: string

  @IsNumber()
  amount: number

  @IsNumber()
  status_id: number
}
