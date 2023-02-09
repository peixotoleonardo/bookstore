import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CreateCategoryPortIn,
  CreateCategoryUseCase,
  SaveCategoryPortOut,
} from '@app/core/application/book';

import {
  CategoryController,
  CategoryRepository,
  CategorySchema,
} from '@bookstore/book/adapter';

@Module({
  imports: [TypeOrmModule.forFeature([CategorySchema])],
  controllers: [CategoryController],
  providers: [
    CategoryRepository,
    {
      provide: SaveCategoryPortOut,
      useExisting: CategoryRepository,
    },
    {
      provide: CreateCategoryPortIn,
      useFactory: (saveCategoryPortOut) =>
        new CreateCategoryUseCase(saveCategoryPortOut),
      inject: [SaveCategoryPortOut],
    },
  ],
})
export class BookModule {}
