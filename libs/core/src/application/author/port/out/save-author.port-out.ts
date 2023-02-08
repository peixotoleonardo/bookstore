import { Author } from '@app/core/domain/author';

export const SaveAuthorPortOut = Symbol();

export interface SaveAuthorPortOut {
  save(author: Author): Promise<Author>;
}
