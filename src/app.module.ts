import { Module } from '@nestjs/common';

import { AuthorModule } from '@bookstore/author/author.module';
import { BookModule } from '@bookstore/book/book.module';
import { CommonModule } from '@bookstore/common/common.module';

@Module({
  imports: [AuthorModule, BookModule, CommonModule],
})
export class AppModule {}
