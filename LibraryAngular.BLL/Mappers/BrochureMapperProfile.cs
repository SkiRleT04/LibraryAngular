using AutoMapper;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.BrochureViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.BLL.Mappers
{
    public class BrochureMapperProfile : Profile
    {
        public BrochureMapperProfile()
        {
            CreateMap<BrochureGetAllBrochureViewModelItem, Brochure>();
            CreateMap<Brochure, BrochureGetAllBrochureViewModelItem>();

            CreateMap<CreateBrochureViewModel, Brochure>();
            CreateMap<Brochure, CreateBrochureViewModel>();

            CreateMap<UpdateBrochureViewModel, Brochure>();
            CreateMap<Brochure, UpdateBrochureViewModel>();
        }
    }
}
