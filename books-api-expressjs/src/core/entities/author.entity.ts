import { Book } from "./book.entity";

export interface IAutor {
  id?: number;
  name: string;
  nationality: string;
  birthDate: Date;
  books?: Book[];
}

export class Author {
  private readonly id?: number;
  private name: string;
  private nationality: string;
  private birthDate: Date;
  private books?: Book[];

  constructor(data: IAutor) {
    this.id = data.id || undefined;
    this.name = data.name;
    this.nationality = data.nationality;
    this.birthDate = data.birthDate;
    this.books = data.books;
  }

  getId(): number | undefined {
    return this.id || undefined;
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

  getBooks(): Book[] | undefined {
    return this.books || undefined;
  }
}
