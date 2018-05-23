using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.ViewModels.LibraryViewModel
{
    public class GetAllCommonLibraryViewModel
    {
        public ICollection<CommonLibraryGetAllCommonLibraryViewModelItem> Сommons { get; set; }

        public GetAllCommonLibraryViewModel()
        {
            Сommons = new List<CommonLibraryGetAllCommonLibraryViewModelItem>();
        }
    }

    public class CommonLibraryGetAllCommonLibraryViewModelItem
    {
        public string Name { get; set; }
        public string Type { get; set; }
    }
}
