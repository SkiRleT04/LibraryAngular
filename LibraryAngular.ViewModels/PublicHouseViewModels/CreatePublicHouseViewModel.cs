using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.PublicHouseViewModels
{
    public class CreatePublicHouseViewModel
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public ICollection<BookCreatePublicHouseViewModelItem> Books { get; set; }

        public CreatePublicHouseViewModel()
        {
            Books = new List<BookCreatePublicHouseViewModelItem>();
        }
    }

    public class BookCreatePublicHouseViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
