import { Body, Controller, Inject, Post } from '@nestjs/common';

import { CreateAuthorPortIn } from '@app/core';

import {
  CreateAuthorRequest,
  CreateAuthorResponse,
} from '@bookstore/author/adapter/in/web/models';

@Controller('authors')
export class AuthorController {
  constructor(
    @Inject(CreateAuthorPortIn) private readonly port: CreateAuthorPortIn,
  ) {}

  @Post()
  async create(@Body() request: CreateAuthorRequest) {
    const output = await this.port.execute(request.toCommand());

    return CreateAuthorResponse.from(output);
  }
}
