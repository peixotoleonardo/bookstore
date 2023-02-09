import { Identifier } from '@app/core/domain/identifier';
import { AggregateRoot } from '@app/core/domain/aggregate-root';

export class Category extends AggregateRoot<Identifier> {
  private constructor(
    id: Identifier,
    private name: string,
    private createdAt: Date,
    private updatedAt?: Date,
    private deletedAt?: Date,
  ) {
    super(id);
  }

  static with(
    id: Identifier,
    name: string,
    createdAt: Date,
    updatedAt?: Date,
    deletedAt?: Date,
  ) {
    return new Category(id, name, createdAt, updatedAt, deletedAt);
  }

  static newCategory(name: string) {
    return this.with(Identifier.unique(), name, new Date());
  }

  getName() {
    return this.name;
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
}
