import { Author } from "./author";
import { PublicHouse } from "./public-house";

export class Book {
  public Id: number;
  public name: string;
  public yearOfPublishing: number;
  public publicHouses: Array<PublicHouse>;
  public authors: Array<Author>;
}
