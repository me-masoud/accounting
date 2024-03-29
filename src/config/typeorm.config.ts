import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../modules/user/entities/user.entity';
import { Transaction } from 'typeorm';
import { TransactionType } from '../modules/transaction_type/entities/transaction_type.entity';
import { Status } from '../modules/status/entities/status.entity';
import { Project } from '../modules/project/entities/project.entity';


const config: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Masoud12@",
  database: "accounting",
  entities: [User, Transaction , TransactionType , Status, Project],
  synchronize: true,
};

export default config;