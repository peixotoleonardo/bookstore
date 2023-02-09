import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from '@app/core/domain/book';
import { SaveCategoryPortOut } from '@app/core/application/book';

import { CategorySchema } from '@bookstore/book/adapter/out/persistence/category.schema';

@Injectable()
export class CategoryRepository implements SaveCategoryPortOut {
  constructor(
    @InjectRepository(CategorySchema)
    private readonly repository: Repository<CategorySchema>,
  ) {}

  save(category: Category): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
