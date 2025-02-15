import { Author } from "./author.entity";
import { Publisher } from "./publisher.entity";

export interface IBook {
  id?: number;
  isbn: string;
  title: string;
  description: string;
  publicationDate: Date;
  publisher?: Publisher;
  authors?: Author[];
}

export class Book {
  id?: number;
  isbn: string;
  title: string;
  description: string;
  publicationDate: Date;
  publisher?: Publisher;
  authors?: Author[];

  constructor(data: IBook) {
    this.id = data.id;
    this.isbn = data.isbn;
    this.title = data.title;
    this.description = data.description;
    this.publicationDate = data.publicationDate;
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

  getPublisher(): Publisher | null {
    return this.publisher || null;
  }

  getAuthors(): Author[] | null {
    return this.authors || null;
  }
}
