using AutoMapper;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.MagazineViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.BLL.Mappers
{
    public class MagazineMapperProfile : Profile
    {
        public MagazineMapperProfile()
        {
            CreateMap<MagazineGetAllMagazineViewModelItem, Magazine>();
            CreateMap<Magazine, MagazineGetAllMagazineViewModelItem>();

            CreateMap<CreateMagazineViewModel, Magazine>();
            CreateMap<Magazine, CreateMagazineViewModel>();

            CreateMap<UpdateMagazineViewModel, Magazine>();
            CreateMap<Magazine, UpdateMagazineViewModel>();
        }
    }
}
