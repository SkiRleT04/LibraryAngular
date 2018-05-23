using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.AuthorViewModels
{
    public class GetAllAuthorViewModel
    {
        public ICollection<AuthorGetAllAuthorViewModelItem> Authors { get; set; }
        public GetAllAuthorViewModel()
        {
            Authors = new List<AuthorGetAllAuthorViewModelItem>();
        }
    }

    public class AuthorGetAllAuthorViewModelItem
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public ICollection<BookGetAllAuthorViewModelItem> Books { get; set; }

        public AuthorGetAllAuthorViewModelItem()
        {
            Books = new List<BookGetAllAuthorViewModelItem>();
        }
    }

    public class BookGetAllAuthorViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
    }

}
