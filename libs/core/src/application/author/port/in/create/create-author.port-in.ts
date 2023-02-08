import { CreateAuthorOutput } from '@app/core/application/author/port/in/create/create-author.output';
import { CreateAuthorCommand } from '@app/core/application/author/port/in/create/create-author.command';

export interface CreateAuthorPortIn {
  execute(command: CreateAuthorCommand): Promise<CreateAuthorOutput>;
}
