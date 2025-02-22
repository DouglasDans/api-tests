interface AuthorRequest {
  name: string;
  nationality: string;
  birthDate: string;
}

interface PublisherRequest {
  name: string;
  cnpj: string;
  country: string;
}

interface BookRequest {
  isbn: string;
  title: string;
  description: string;
  publicationDate: Date;
  publisher: PublisherRequest;
  author: AuthorRequest;
}
