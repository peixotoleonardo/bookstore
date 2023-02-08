import { Module } from '@nestjs/common';

import { CommonModule } from '@bookstore/common/common.module';
import { AuthorModule } from '@bookstore/author/author.module';

@Module({
  imports: [CommonModule, AuthorModule],
})
export class AppModule {}
