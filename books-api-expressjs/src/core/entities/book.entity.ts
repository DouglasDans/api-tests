import { Author } from "./author.entity";
import { Publisher } from "./publisher.entity";

export interface IBook {
  id?: number;
  isbn: string;
  title: string;
  description: string;
  publicationDate: Date;
  publisherId: number;
  authorId: number;
  publisher?: Publisher;
  authors?: Author;
}

export class Book {
  private id?: number;
  private isbn: string;
  private title: string;
  private description: string;
  private publicationDate: Date;
  private publisherId: number;
  private authorId: number;
  private publisher?: Publisher;
  private authors?: Author;

  constructor(data: IBook) {
    this.id = data.id;
    this.isbn = data.isbn;
    this.title = data.title;
    this.description = data.description;
    this.publicationDate = data.publicationDate;
    this.publisherId = data.publisherId;
    this.authorId = data.authorId;
    this.publisher = data.publisher;
    this.authors = data.authors;
  }

  getId(): number | null {
    return this.id || null;
  }

  getIsbn(): string {
    return this.isbn;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getPublicationDate(): Date {
    return this.publicationDate;
  }

  getPublisherId(): number {
    return this.publisherId;
  }

  getAuthorId(): number {
    return this.authorId;
  }

  getPublisher(): Publisher | undefined {
    return this.publisher || undefined;
  }

  getAuthors(): Author | undefined {
    return this.authors || undefined;
  }
}
