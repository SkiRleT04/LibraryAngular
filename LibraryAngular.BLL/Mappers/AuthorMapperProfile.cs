using AutoMapper;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels;
using LibraryAngular.ViewModels.AuthorViewModels;
using LibraryAngular.ViewModels.BookViewModels;

namespace LibraryAngular.BLL.Mappers
{
    public class AuthorMapperProfile : Profile
    {
        public AuthorMapperProfile()
        {
            CreateMap<Author, AuthorGetAllAuthorViewModelItem>();
            CreateMap<AuthorGetAllAuthorViewModelItem, Author>();

            CreateMap<Author, CreateAuthorViewModel>();
            CreateMap<CreateAuthorViewModel, Author>();

            CreateMap<Author, UpdateAuthorViewModel>();
            CreateMap<UpdateAuthorViewModel, Author>();

            CreateMap<Author, AuthorGetAllBookViewModelItem>();
            CreateMap<AuthorGetAllBookViewModelItem, Author>();

            CreateMap<Author, AuthorCreateBookViewModelItem>();
            CreateMap<AuthorCreateBookViewModelItem, Author>();

            CreateMap<Author, AuthorUpdateBookViewModelItem>();
            CreateMap<AuthorUpdateBookViewModelItem, Author>();
        }
    }
}
