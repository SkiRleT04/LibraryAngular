using AutoMapper;
using LibraryAngular.DAL.Repositories;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.AuthorViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryAngular.BLL.Services
{
    public class AuthorService
    {
        private AuthorRepository _authorRepository;
        private AuthorInBookRepository _authorInBookRepository;

        public AuthorService(AuthorRepository authorRepository, AuthorInBookRepository authorInBookRepository)
        {
            _authorRepository = authorRepository;
            _authorInBookRepository = authorInBookRepository;
        }

        public async Task<GetAllAuthorViewModel> GetAll()
        {
            var authorVMItemList = new List<AuthorGetAllAuthorViewModelItem>();
            var result = new GetAllAuthorViewModel();

            IEnumerable<AuthorInBook> authorsBooksList = await _authorInBookRepository.GetAllAuthors();
            ILookup<Author, Book> lookupList = authorsBooksList.ToLookup(p => p.Author, p => p.Book);
            foreach (IGrouping<Author, Book> item in lookupList)
            {
                var authorVMItem = Mapper.Map<Author, AuthorGetAllAuthorViewModelItem>(item.Key);
                authorVMItem.Books = (item.ToList().FirstOrDefault() == null) ? 
                    new List<BookGetAllAuthorViewModelItem>() :
                    Mapper.Map<List<Book>, List<BookGetAllAuthorViewModelItem>>(item.ToList());
                authorVMItemList.Add(authorVMItem);
            }
            result.Authors = authorVMItemList;
            return result;
        }

        public async Task<int> Create(CreateAuthorViewModel item)
        {
            var createdItem = Mapper.Map<CreateAuthorViewModel, Author>(item);
            int createdItemId = await _authorRepository.Create(createdItem);
            var books = Mapper.Map<ICollection<BookCreateAuthorViewModelItem>, List<Book>>(item.Books);
            await _authorInBookRepository.AddBooksByAuthorId(createdItemId, books);
            return createdItemId;
        }

        public async Task Update(UpdateAuthorViewModel item)
        {
            var updatedItem = Mapper.Map<UpdateAuthorViewModel, Author>(item);
            await _authorRepository.Update(updatedItem);
            var books = Mapper.Map<ICollection<BookUpdateAuthorViewModelItem>, List<Book>>(item.Books);
            await _authorInBookRepository.UpdateBooksByAuthorId(item.Id, books);
        }

        public async Task Delete(int id)
        {
            await _authorRepository.Delete(id);
        }


    }
}
