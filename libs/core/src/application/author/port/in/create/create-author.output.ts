import { Author } from '@app/core/domain/author';

export class CreateAuthorOutput {
  private constructor(readonly id: string) {}

  static from(author: Author) {
    return new CreateAuthorOutput(author.getId().getValue());
  }
}
