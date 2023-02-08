import { Identifier } from '@app/core/domain//identifier';
import { AggregateRoot } from '@app/core/domain/aggregate-root';

export class Author extends AggregateRoot<Identifier> {
  private constructor(
    id: Identifier,
    private name: string,
    private description: string,
    private createdAt: Date,
    private updatedAt?: Date,
    private deletedAt?: Date,
  ) {
    super(id);
  }

  static newAuthor(name: string, description: string) {
    const now = new Date();

    return new Author(Identifier.unique(), name, description, now);
  }

  static with(
    id: Identifier,
    name: string,
    description: string,
    createdAt: Date,
    updatedAt?: Date,
    deletedAt?: Date,
  ) {
    return new Author(id, name, description, createdAt, updatedAt, deletedAt);
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  getDeletedAt() {
    return this.deletedAt;
  }

  isActive() {
    return !!this.deletedAt;
  }
}
