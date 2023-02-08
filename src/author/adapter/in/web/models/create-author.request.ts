import { CreateAuthorCommand } from '@app/core';

export class CreateAuthorRequest {
  readonly name: string;
  readonly description: string;

  toCommand() {
    return new CreateAuthorCommand(this.name, this.description);
  }
}
