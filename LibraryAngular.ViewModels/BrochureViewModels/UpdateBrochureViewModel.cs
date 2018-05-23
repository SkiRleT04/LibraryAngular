using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.BrochureViewModels
{
    public class UpdateBrochureViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string TypeOfCover { get; set; }
        public int NumberOfPages { get; set; }
    }
}
