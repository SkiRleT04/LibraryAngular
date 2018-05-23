using System.Collections.Generic;

namespace LibraryAngular.Entities
{
    public class Book
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public override bool Equals(object obj)
        {
            var book = obj as Book;
            return book != null &&
                   Id == book.Id;
        }

        public override int GetHashCode()
        {
            return 2108858624 + Id.GetHashCode();
        }
    }
}
