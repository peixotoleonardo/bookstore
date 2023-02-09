import {
  CreateCategoryCommand,
  CreateCategoryOutput,
  CreateCategoryPortIn,
  SaveCategoryPortOut,
} from '@app/core/application/book/category/port';
import { Category } from '@app/core/domain/book';

export class CreateCategoryUseCase implements CreateCategoryPortIn {
  constructor(private readonly port: SaveCategoryPortOut) {}

  async execute(command: CreateCategoryCommand): Promise<CreateCategoryOutput> {
    const category = await this.port.save(Category.newCategory(command.name));

    return CreateCategoryOutput.from(category);
  }
}
