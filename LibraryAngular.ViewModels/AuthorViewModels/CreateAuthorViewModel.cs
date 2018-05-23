using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.AuthorViewModels
{
    public class CreateAuthorViewModel
    {
        public int? Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public ICollection<BookCreateAuthorViewModelItem> Books { get; set; }
    }

    public class BookCreateAuthorViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
