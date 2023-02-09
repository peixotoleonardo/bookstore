import { Identifier } from '@app/core/domain/identifier';
import { AggregateRoot } from '@app/core/domain/aggregate-root';
import { Category } from '@app/core/domain/book/category';

export class Book extends AggregateRoot<Identifier> {
  private constructor(
    id: Identifier,
    private title: string,
    private category: Category,
    private summary: string,
    private pages: number,
    private isbn: string,
    private publicationDate: Date,
    private createdAt: Date,
    private subtitle?: string,
    private updatedAt?: Date,
    private deletedAt?: Date,
  ) {
    super(id);
  }

  static newBook(
    title: string,
    category: Category,
    summary: string,
    pages: number,
    isbn: string,
    publicationDate: Date,
    subtitle?: string,
  ) {
    return this.with(
      Identifier.unique(),
      title,
      category,
      summary,
      pages,
      isbn,
      publicationDate,
      new Date(),
      subtitle,
    );
  }

  static with(
    id: Identifier,
    title: string,
    category: Category,
    summary: string,
    pages: number,
    isbn: string,
    publicationDate: Date,
    createdAt: Date,
    subtitle?: string,
    updatedAt?: Date,
    deletedAt?: Date,
  ) {
    return new Book(
      id,
      title,
      category,
      summary,
      pages,
      isbn,
      publicationDate,
      createdAt,
      subtitle,
      updatedAt,
      deletedAt,
    );
  }

  getTitle() {
    return this.title;
  }

  getCategory() {
    return this.category;
  }

  getSummary() {
    return this.summary;
  }

  getPages() {
    return this.pages;
  }

  getIsbn() {
    return this.isbn;
  }

  getPublicationDate() {
    return this.publicationDate;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getSubtitle() {
    return this.subtitle;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  getDeletedAt() {
    return this.deletedAt;
  }
}
