import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configs, schema, TypeOrmOptions } from '@bookstore/common/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configs,
      validationSchema: schema,
    }),
    TypeOrmModule.forRootAsync({
      inject: [TypeOrmOptions],
      useFactory: (config: TypeOrmOptions) => config,
    }),
  ],
})
export class CommonModule {}
