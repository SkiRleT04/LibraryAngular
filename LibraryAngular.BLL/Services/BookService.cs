using AutoMapper;
using LibraryAngular.DAL.Repositories;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.BookViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryAngular.BLL.Services
{
    public class BookService
    {
        private BookRepository _bookRepository;
        private AuthorInBookRepository _authorInBookRepository;
        private PublicHouseInBookRepository _publicHouseInBookRepository;

        public BookService(BookRepository bookRepository, AuthorInBookRepository authorInBookRepository, PublicHouseInBookRepository publicHouseInBookRepository)
        {
            _bookRepository = bookRepository;
            _authorInBookRepository = authorInBookRepository;
            _publicHouseInBookRepository = publicHouseInBookRepository;
        }

        public async Task<GetAllBookViewModel> GetAll()
        {
            var bookVMItemList = new List<BookGetAllBookViewModelItem>();
            var result = new GetAllBookViewModel();

            IEnumerable<AuthorInBook> booksAuthorsList = await _authorInBookRepository.GetAllBooks();
            IEnumerable<PublicHouseInBook> booksPublicHousesList = await _publicHouseInBookRepository.GetAllBooks();

            ILookup<Book, Author> lookupAuthorsList = booksAuthorsList.ToLookup(p => p.Book, p => p.Author);
            ILookup<Book, PublicHouse> lookupPublicHousesList = booksPublicHousesList.ToLookup(p => p.Book, p => p.PublicHouse);

            var authorsAndPublicHouses = lookupAuthorsList.Zip(lookupPublicHousesList, (a, ph) => new { PropertyAuthor = a, PropertyPublicHouse = ph });
            foreach (var item in authorsAndPublicHouses)
            {
                var bookVMItem = Mapper.Map<Book, BookGetAllBookViewModelItem>(item.PropertyAuthor.Key);

                bookVMItem.Authors = (item.PropertyAuthor.ToList().FirstOrDefault() == null) ?
                    new List<AuthorGetAllBookViewModelItem>() :
                    Mapper.Map<List<Author>, List<AuthorGetAllBookViewModelItem>>(item.PropertyAuthor.ToList());

                bookVMItem.PublicHouses = (item.PropertyPublicHouse.ToList().FirstOrDefault() == null) ?
                    new List<PublicHouseGetAllBookViewModelItem>() :
                    Mapper.Map<List<PublicHouse>, List<PublicHouseGetAllBookViewModelItem>>(item.PropertyPublicHouse.ToList());

                bookVMItemList.Add(bookVMItem);
            }

            result.Books = bookVMItemList;
            return result;
        }
        
        public async Task<int> Create(CreateBookViewModel item)
        {
            var createdItem = Mapper.Map<CreateBookViewModel, Book>(item);
            int createdItemId = await _bookRepository.Create(createdItem);

            var authors = Mapper.Map<ICollection<AuthorCreateBookViewModelItem>, List<Author>>(item.Authors);
            await _authorInBookRepository.AddAuthorsByBookId(createdItemId, authors);

            var publicHouses = Mapper.Map<ICollection<PublicHouseCreateBookViewModelItem>, List<PublicHouse>>(item.PublicHouses);
            await _publicHouseInBookRepository.AddPublicHousesByBookId(createdItemId, publicHouses);

            return createdItemId;
        }

        public async Task Update(UpdateBookViewModel item)
        {
            var updatedItem = Mapper.Map<UpdateBookViewModel, Book>(item);
            await _bookRepository.Update(updatedItem);

            var authors = Mapper.Map<ICollection<AuthorUpdateBookViewModelItem>, List<Author>>(item.Authors);
            await _authorInBookRepository.UpdateAuthorsByBookId(item.Id, authors);

            var publicHouses = Mapper.Map<ICollection<PublicHouseUpdateBookViewModelItem>, List<PublicHouse>>(item.PublicHouses);
            await _publicHouseInBookRepository.UpdatePublicHousesByBookId(item.Id, publicHouses);
        }

        public async Task Delete(int id)
        {
            await _bookRepository.Delete(id);
        } 

    }
}
