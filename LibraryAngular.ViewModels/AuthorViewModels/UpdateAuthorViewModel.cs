using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.AuthorViewModels
{
    public class UpdateAuthorViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public ICollection<BookUpdateAuthorViewModelItem> Books { get; set; }

        public UpdateAuthorViewModel()
        {
            Books = new List<BookUpdateAuthorViewModelItem>();
        }
    }

    public class BookUpdateAuthorViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
