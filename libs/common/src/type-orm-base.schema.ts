import { EntitySchemaColumnOptions } from 'typeorm';

export interface TypeOrmBaseSchema {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export const TypeOrmBaseSchema: Record<
  keyof TypeOrmBaseSchema,
  EntitySchemaColumnOptions
> = {
  id: {
    primary: true,
    generated: 'uuid',
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
    nullable: true,
  },
  deletedAt: {
    type: Date,
    nullable: true,
  },
};
