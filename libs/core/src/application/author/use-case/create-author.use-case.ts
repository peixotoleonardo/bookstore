import { Author } from '@app/core/domain/author';

import {
  CreateAuthorCommand,
  CreateAuthorOutput,
  CreateAuthorPortIn,
  SaveAuthorPortOut,
} from '@app/core/application/author/port';

export class CreateAuthorUseCase implements CreateAuthorPortIn {
  constructor(private readonly port: SaveAuthorPortOut) {}

  async execute(command: CreateAuthorCommand): Promise<CreateAuthorOutput> {
    const author = await this.port.save(
      Author.newAuthor(command.name, command.description),
    );

    return CreateAuthorOutput.from(author);
  }
}
