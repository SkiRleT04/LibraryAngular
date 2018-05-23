using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.PublicHouseViewModels
{
    public class GetAllPublicHouseViewModel
    {
        public ICollection<PublicHouseGetAllPublicHouseViewModelItem> PublicHouses { get; set; }

        public GetAllPublicHouseViewModel()
        {
            PublicHouses = new List<PublicHouseGetAllPublicHouseViewModelItem>();
        }
    }

    public class PublicHouseGetAllPublicHouseViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public virtual ICollection<BookGetAllPublicHouseViewModelItem> Books { get; set; }

        public PublicHouseGetAllPublicHouseViewModelItem()
        {
            Books = new List<BookGetAllPublicHouseViewModelItem>();
        }
    }

    public class BookGetAllPublicHouseViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
