import { randomUUID } from 'node:crypto';

import { ValueObject } from '@app/core/domain/value-object';

export class Identifier extends ValueObject {
  private constructor(private readonly value: string) {
    super();
  }

  static unique() {
    return new Identifier(randomUUID());
  }

  getValue() {
    return this.value;
  }
}
