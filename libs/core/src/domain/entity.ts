import { Identifier } from '@app/core/domain/identifier';

export abstract class Entity<Id extends Identifier> {
  protected constructor(protected readonly id: Id) {}

  getId() {
    return this.id;
  }
}
