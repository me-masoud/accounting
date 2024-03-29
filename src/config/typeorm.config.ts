import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './src/entities/user.entity';
import * as process from 'process';
import { SystemPointType } from './src/system_point_type/entities/system_point_type.entity';
import { SystemPoint } from './src/system_point/entities/system_point.entity';


const config: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Masoud12@",
  database: "accounting",
  entities: [User],
  synchronize: true,
};

export default config;