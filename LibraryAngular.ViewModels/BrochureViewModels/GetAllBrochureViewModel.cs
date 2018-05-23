using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.BrochureViewModels
{
    public class GetAllBrochureViewModel
    {
        public ICollection<BrochureGetAllBrochureViewModelItem> Brochures { get; set; }

        public GetAllBrochureViewModel()
        {
            Brochures = new List<BrochureGetAllBrochureViewModelItem>();
        }
    }

    public class BrochureGetAllBrochureViewModelItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string TypeOfCover { get; set; }
        public int NumberOfPages { get; set; }
    }
}
