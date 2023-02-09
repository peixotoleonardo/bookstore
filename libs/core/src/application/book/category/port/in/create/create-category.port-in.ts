import { CreateCategoryCommand } from '@app/core/application/book/category/port/in/create/create-category.command';
import { CreateCategoryOutput } from '@app/core/application/book/category/port/in/create/create-category.output';

export const CreateCategoryPortIn = Symbol();

export interface CreateCategoryPortIn {
  execute(command: CreateCategoryCommand): Promise<CreateCategoryOutput>;
}
