import { Entity } from '@app/core/domain/entity';
import { Identifier } from './identifier';

export abstract class AggregateRoot<Id extends Identifier> extends Entity<Id> {}
