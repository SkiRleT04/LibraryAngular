using AutoMapper;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.AuthorViewModels;
using LibraryAngular.ViewModels.BookViewModels;
using LibraryAngular.ViewModels.PublicHouseViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryAngular.BLL.Mappers
{
    public class BookMapperProfile : Profile
    {
        public BookMapperProfile()
        {
            CreateMap<BookGetAllAuthorViewModelItem, Book>();
            CreateMap<Book, BookGetAllAuthorViewModelItem>();

            CreateMap<BookCreateAuthorViewModelItem, Book>();
            CreateMap<Book, BookCreateAuthorViewModelItem>();

            CreateMap<Book, BookUpdateAuthorViewModelItem>();
            CreateMap<BookUpdateAuthorViewModelItem, Book>();

            CreateMap<Book, BookGetAllBookViewModelItem>();
            CreateMap<BookGetAllBookViewModelItem, Book>();


            CreateMap<Book, BookGetAllPublicHouseViewModelItem>();
            CreateMap<BookGetAllPublicHouseViewModelItem, Book>();

            CreateMap<Book, CreateBookViewModel>();
            CreateMap<CreateBookViewModel, Book>();

            CreateMap<Book, UpdateAuthorViewModel>();
            CreateMap<UpdateAuthorViewModel, Book>();
        }
    }
}
