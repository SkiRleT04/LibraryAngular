using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.BookViewModels
{
    public class GetAllBookViewModel
    {
        public ICollection<BookGetAllBookViewModelItem> Books { get; set; }
        public GetAllBookViewModel()
        {
            Books = new List<BookGetAllBookViewModelItem>();
        }
    }

    public class BookGetAllBookViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public virtual ICollection<AuthorGetAllBookViewModelItem> Authors { get; set; }
        public virtual ICollection<PublicHouseGetAllBookViewModelItem> PublicHouses { get; set; }

        public BookGetAllBookViewModelItem()
        {
            Authors = new List<AuthorGetAllBookViewModelItem>();
            PublicHouses = new List<PublicHouseGetAllBookViewModelItem>();
        }
    }


    public class PublicHouseGetAllBookViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
    }

    public class AuthorGetAllBookViewModelItem
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
    }

}
