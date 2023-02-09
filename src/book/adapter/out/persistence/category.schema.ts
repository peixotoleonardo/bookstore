import { EntitySchema } from 'typeorm';

import { TypeOrmBaseSchema } from '@app/common';

export interface CategorySchema extends TypeOrmBaseSchema {
  name: string;
}

export const CategorySchema = new EntitySchema<CategorySchema>({
  name: 'category',
  tableName: 'categories',
  columns: {
    ...TypeOrmBaseSchema,
    name: {
      unique: true,
      type: String,
    },
  },
});
