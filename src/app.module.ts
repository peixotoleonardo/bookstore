import { Module } from '@nestjs/common';

import { CommonModule } from '@bookstore/common/common.module';

@Module({
  imports: [CommonModule],
})
export class AppModule {}
