import { Book } from "./book";

export class Author {
  public Id: number;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public books: Array<Book>;
}
