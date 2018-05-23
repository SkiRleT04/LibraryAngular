using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.BookViewModels
{
    public class UpdateBookViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
        public ICollection<AuthorUpdateBookViewModelItem> Authors { get; set; }
        public ICollection<PublicHouseUpdateBookViewModelItem> PublicHouses { get; set; }

        public UpdateBookViewModel()
        {
            Authors = new List<AuthorUpdateBookViewModelItem>();
            PublicHouses = new List<PublicHouseUpdateBookViewModelItem>();
        }
    }

    public class AuthorUpdateBookViewModelItem
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
    }

    public class PublicHouseUpdateBookViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
    }
}
