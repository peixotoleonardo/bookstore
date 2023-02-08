import Joi from 'joi';

import TypeOrmConfig, {
  TypeOrmOptionsSchema,
} from '@bookstore/common/config/typeorm.config';

export const configs = [TypeOrmConfig];
export const schema = Joi.object({
  ...TypeOrmOptionsSchema,
});

export { TypeOrmOptions } from '@bookstore/common/config/typeorm.config';
