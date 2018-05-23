import { Book } from "./book";

export class PublicHouse {
  public id: number;
  public name: string;
  public country: string;
  public books: Array<Book>;
}
