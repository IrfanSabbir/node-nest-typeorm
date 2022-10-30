import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import { config } from 'dotenv';

// this will explicitly load .env, we will get a merged process.env
config();

console.log(
  process.env.DB_HOST,
  process.env.DB_USERNAME,
  process.env.DB_PORT,
  process.env.DB_PASSWORD,
  process.env.DB_NAME,
);

// module.exports = {
//   type: 'mysql',
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   keepConnectionAlive: true,
//   charset: 'utf8mb4_unicode_ci',
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   synchronize: true,
//   logging: true,

//   // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   // migrations: [`${__dirname}/../**/migrations/*.{ts,js}`],
//   // subscribers: [`${__dirname}/../**/subscribers/*.{ts,js}`],
//   // cli: {
//   //   entitiesDir: `${__dirname}/../**/entities/*.{ts,js}`,
//   //   migrationsDir: `${__dirname}/../**/migrations/*.{ts,js}`,
//   //   subscribersDir: `${__dirname}/../**/subscribers/*.{ts,js}`,
//   // },
//   // rollbar_token,
//   // environment,
//   // rollbar_enabled,
// };

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      keepConnectionAlive: true,
      charset: 'utf8mb4_unicode_ci',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    };
  },
};

// export default class TypeOrmConfig {
//   static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
//     console.log(configService.get('DB_PORT'));
//     return {
//       type: 'mysql',
//       host: configService.get('DB_HOST'),
//       port: configService.get('DB_PORT'),
//       username: configService.get('DB_USERNAME'),
//       password: configService.get('DB_PASSWORD'),
//       database: configService.get('DB_NAME'),
//       entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//       synchronize: true,
//       logging: true,
//     };
//   }
// }

// export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
//   imports: [ConfigModule],
//   useFactory: async (
//     configService: ConfigService,
//   ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
//   inject: [ConfigService],
// };

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: '12345',
//   database: 'quiz',
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   synchronize: true,
//   logging: true,
// };
