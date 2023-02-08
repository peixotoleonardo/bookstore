import { EntitySchema } from 'typeorm';

import { TypeOrmBaseSchema } from '@app/common';

export interface AuthorSchema extends TypeOrmBaseSchema {
  name: string;
  description: string;
}

export const AuthorSchema = new EntitySchema<AuthorSchema>({
  name: 'author',
  tableName: 'authors',
  columns: {
    ...TypeOrmBaseSchema,
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
});
