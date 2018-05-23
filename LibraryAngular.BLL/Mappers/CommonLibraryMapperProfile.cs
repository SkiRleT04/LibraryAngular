using AutoMapper;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.LibraryViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.BLL.Mappers
{
    public class CommonLibraryMapperProfile:Profile
    {
        public CommonLibraryMapperProfile()
        {
            CreateMap<CommonLibrary, CommonLibraryGetAllCommonLibraryViewModelItem>();
            CreateMap<CommonLibraryGetAllCommonLibraryViewModelItem,CommonLibrary>();
        }
    }
}
