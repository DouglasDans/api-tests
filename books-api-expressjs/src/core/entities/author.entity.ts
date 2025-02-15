import { Book } from "./book.entity";

export interface IAutor {
  id?: number;
  name: string;
  nationality: string;
  birthDate: Date;
  books?: Book[];
}

export class Author {
  id?: number;
  name: string;
  nationality: string;
  birthDate: Date;
  books?: Book[];

  constructor(data: IAutor) {
    this.id = data.id;
    this.name = data.name;
    this.nationality = data.nationality;
    this.birthDate = data.birthDate;
    this.books = data.books;
  }

  getId(): number | null {
    return this.id || null;
  }

  getName(): string {
    return this.name;
  }

  getNationality(): string {
    return this.nationality;
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  getBooks(): Book[] | null {
    return this.books || null;
  }
}
