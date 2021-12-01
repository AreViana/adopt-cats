import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',
});
