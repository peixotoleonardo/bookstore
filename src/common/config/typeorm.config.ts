import Joi from 'joi';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs, ConfigType } from '@nestjs/config';

const config = registerAs<TypeOrmModuleOptions>('typeorm', () => ({
  type: 'postgres',
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
}));

export default config;

export const TypeOrmOptions = config.KEY;
export type TypeOrmOptions = ConfigType<typeof config>;

export const TypeOrmOptionsSchema = {
  TYPEORM_PORT: Joi.number().required(),
  TYPEORM_USERNAME: Joi.string().required(),
  TYPEORM_PASSWORD: Joi.string().required(),
  TYPEORM_DATABASE: Joi.string().required(),
};
