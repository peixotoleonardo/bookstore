import { Category } from '@app/core/domain/book';

export const SaveCategoryPortOut = Symbol();

export interface SaveCategoryPortOut {
  save(category: Category): Promise<Category>;
}
