import { Module } from '@nestjs/common';

import {
  CreateAuthorPortIn,
  CreateAuthorUseCase,
  SaveAuthorPortOut,
} from '@app/core';

import {
  AuthorMapper,
  AuthorController,
  AuthorSchema,
  AuthorRepository,
} from '@bookstore/author/adapter';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorSchema])],
  controllers: [AuthorController],
  providers: [
    AuthorMapper,
    AuthorRepository,
    {
      provide: SaveAuthorPortOut,
      useExisting: AuthorRepository,
    },
    {
      provide: CreateAuthorPortIn,
      useFactory: (repository) => new CreateAuthorUseCase(repository),
      inject: [AuthorRepository],
    },
  ],
})
export class AuthorModule {}
