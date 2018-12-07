export interface CreateAuthorInput {
    name?: string;
    age?: number;
}

export interface CreateBookInput {
    title?: string;
    volume?: number;
    yearOfPublication?: number;
}

export interface Author {
    id: number;
    name?: string;
    age?: number;
    books?: Book[];
}

export interface Book {
    id: number;
    title?: string;
    volume?: number;
    yearOfPublication?: number;
}

export interface IMutation {
    createAuthor(createAuthorInput?: CreateAuthorInput): Author | Promise<Author>;
    createBook(createBookInput?: CreateBookInput): Book | Promise<Book>;
}

export interface IQuery {
    author(id: number): Author | Promise<Author>;
    authors(): Author[] | Promise<Author[]>;
    book(id: number): Book | Promise<Book>;
    books(): Book[] | Promise<Book[]>;
    temp__(): boolean | Promise<boolean>;
}

export interface ISubscription {
    authorCreate(): Author | Promise<Author>;
    bookCreate(): Book | Promise<Book>;
}
