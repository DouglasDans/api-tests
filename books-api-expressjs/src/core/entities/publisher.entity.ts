import { Book } from "./book.entity";

export interface IPublisher {
  id?: number;
  name: string;
  cnpj: string;
  country: string;
  books?: Book[];
}

export class Publisher {
  id?: number;
  name: string;
  cnpj: string;
  country: string;
  books?: Book[];

  constructor(data: IPublisher) {
    this.id = data.id;
    this.name = data.name;
    this.cnpj = data.cnpj;
    this.country = data.country;
    this.books = data.books;
  }

  getId(): number | null {
    return this.id || null;
  }

  getName(): string {
    return this.name;
  }

  getCnpj(): string {
    return this.cnpj;
  }

  getCountry(): string {
    return this.country;
  }

  getBooks(): Book[] | null {
    return this.books || null;
  }
}
