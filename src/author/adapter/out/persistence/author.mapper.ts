import { Injectable } from '@nestjs/common';

import { Author } from '@app/core/domain/author';
import { Identifier } from '@app/core/domain/identifier';

import { AuthorSchema } from '@bookstore/author/adapter/out/persistence/author.schema';

@Injectable()
export class AuthorMapper {
  fromDomainToSchema(author: Author): AuthorSchema {
    return {
      id: author.getId().getValue(),
      name: author.getName(),
      description: author.getDescription(),
      createdAt: author.getCreatedAt(),
      updatedAt: author.getUpdatedAt(),
      deletedAt: author.getDeletedAt(),
    };
  }

  fromSchemaToDomain(author: AuthorSchema) {
    return Author.with(
      Identifier.from(author.id),
      author.name,
      author.description,
      author.createdAt,
      author.updatedAt,
      author.deletedAt,
    );
  }
}
