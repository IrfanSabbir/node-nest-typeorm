import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'postgres',
  password: '12345',
  database: 'quiz',
  entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
  ],
  synchronize: true,
}
