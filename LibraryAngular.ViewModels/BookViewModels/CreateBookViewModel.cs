using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.BookViewModels
{
    public class CreateBookViewModel
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
        public ICollection<AuthorCreateBookViewModelItem> Authors { get; set; }
        public ICollection<PublicHouseCreateBookViewModelItem> PublicHouses { get; set; }

        public CreateBookViewModel()
        {
            Authors = new List<AuthorCreateBookViewModelItem>();
            PublicHouses = new List<PublicHouseCreateBookViewModelItem>();
        }
    }

    public class AuthorCreateBookViewModelItem
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
    }

    public class PublicHouseCreateBookViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
    }
        


}
