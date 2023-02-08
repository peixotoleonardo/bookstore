import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SaveAuthorPortOut } from '@app/core';
import { Author } from '@app/core/domain/author';

import { AuthorSchema } from '@bookstore/author/adapter/out/persistence/author.schema';
import { AuthorMapper } from '@bookstore/author/adapter/out/persistence/author.mapper';

@Injectable()
export class AuthorRepository implements SaveAuthorPortOut {
  constructor(
    @InjectRepository(AuthorSchema)
    private readonly repository: Repository<AuthorSchema>,
    private readonly mapper: AuthorMapper,
  ) {}

  async save(author: Author): Promise<Author> {
    const schema = await this.repository.save(
      this.mapper.fromDomainToSchema(author),
    );

    return this.mapper.fromSchemaToDomain(schema);
  }
}
