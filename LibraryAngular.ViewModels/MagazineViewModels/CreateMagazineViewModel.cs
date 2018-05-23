using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.MagazineViewModels
{
    public class CreateMagazineViewModel
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string AuthorName { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
