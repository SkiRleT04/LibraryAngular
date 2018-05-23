using AutoMapper;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.BookViewModels;
using LibraryAngular.ViewModels.PublicHouseViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.BLL.Mappers
{
    public class PublicHouseMapperProfile:Profile
    {
        public PublicHouseMapperProfile()
        {
            CreateMap<PublicHouse, PublicHouseGetAllBookViewModelItem>();
            CreateMap<PublicHouseGetAllBookViewModelItem, PublicHouse>();

            CreateMap<PublicHouse, PublicHouseGetAllPublicHouseViewModelItem>();
            CreateMap<PublicHouseGetAllPublicHouseViewModelItem, PublicHouse>();


        }
    }
}
