using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.PublicHouseViewModels
{
    public class UpdatePublicHouseViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public ICollection<BookUpdatePublicHouseViewModelItem> Books { get; set; }

        public UpdatePublicHouseViewModel()
        {
            Books = new List<BookUpdatePublicHouseViewModelItem>();
        }
    }

    public class BookUpdatePublicHouseViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
