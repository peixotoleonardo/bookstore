import { Category } from '@app/core/domain/book';

export class CreateCategoryOutput {
  private constructor(readonly id: string) {}

  static from(category: Category) {
    return new CreateCategoryOutput(category.getId().getValue());
  }
}
