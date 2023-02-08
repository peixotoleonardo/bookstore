import { CreateAuthorOutput } from '@app/core';

export class CreateAuthorResponse {
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }

  static from(output: CreateAuthorOutput) {
    return new CreateAuthorResponse(output.id);
  }
}
