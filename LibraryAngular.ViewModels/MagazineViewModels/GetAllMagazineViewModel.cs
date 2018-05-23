using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.MagazineViewModels
{
    public class GetAllMagazineViewModel
    {
        public ICollection<MagazineGetAllMagazineViewModelItem> Magazines { get; set; }

        public GetAllMagazineViewModel()
        {
            Magazines = new List<MagazineGetAllMagazineViewModelItem>();
        }
    }

    public class MagazineGetAllMagazineViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string AuthorName { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
