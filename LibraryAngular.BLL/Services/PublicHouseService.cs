using AutoMapper;
using LibraryAngular.DAL.Repositories;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.PublicHouseViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryAngular.BLL.Services
{
    public class PublicHouseService
    {
        private PublicHouseRepository _publicHouseRepository;
        private PublicHouseInBookRepository _publicHouseInBookRepository;

        public PublicHouseService(PublicHouseRepository publicHouseRepository, PublicHouseInBookRepository publicHouseInBookRepository)
        {
            _publicHouseRepository = publicHouseRepository;
            _publicHouseInBookRepository = publicHouseInBookRepository;
        }

        public async Task<GetAllPublicHouseViewModel> GetAll()
        {
            var publicHouseVMItemList = new List<PublicHouseGetAllPublicHouseViewModelItem>();
            var result = new GetAllPublicHouseViewModel();

            IEnumerable<PublicHouseInBook> publicHouseBooksList = await _publicHouseInBookRepository.GetAllPublicHouses();
            ILookup<PublicHouse, Book> lookupList = publicHouseBooksList.ToLookup(p => p.PublicHouse, p => p.Book);
            foreach (IGrouping<PublicHouse, Book> item in lookupList)
            {
                var publicHouseVMItem = Mapper.Map<PublicHouse, PublicHouseGetAllPublicHouseViewModelItem>(item.Key);
                publicHouseVMItem.Books = (item.ToList().FirstOrDefault() == null) ?
                    new List<BookGetAllPublicHouseViewModelItem>() :
                    Mapper.Map<List<Book>, List<BookGetAllPublicHouseViewModelItem>>(item.ToList());
                publicHouseVMItemList.Add(publicHouseVMItem);
            }
            result.PublicHouses = publicHouseVMItemList;
            return result;
        }

        public async Task<int> Create(CreatePublicHouseViewModel item)
        {
            var createdItem = Mapper.Map<CreatePublicHouseViewModel, PublicHouse>(item);
            int createdItemId = await _publicHouseRepository.Create(createdItem);
            var books = Mapper.Map<ICollection<BookCreatePublicHouseViewModelItem>, List<Book>>(item.Books);
            await _publicHouseInBookRepository.AddBooksByPublicHouseId(createdItemId, books);
            return createdItemId;
        }

        public async Task Update(UpdatePublicHouseViewModel item)
        {
            var updatedItem = Mapper.Map<UpdatePublicHouseViewModel, PublicHouse>(item);
            await _publicHouseRepository.Update(updatedItem);
            var books = Mapper.Map<ICollection<BookUpdatePublicHouseViewModelItem>, List<Book>>(item.Books);
            await _publicHouseInBookRepository.UpdateBooksByPublicHouseId(item.Id, books);
        }

        public async Task Delete(int id)
        {
            await _publicHouseRepository.Delete(id);
        }
    }
}
