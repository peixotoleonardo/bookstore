import { Author } from '@app/core/domain/author';

export interface SaveAuthorPortOut {
  execute(author: Author): Promise<Author>;
}
