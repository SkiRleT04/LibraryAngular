using AutoMapper;
using LibraryAngular.DAL.Repositories;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.MagazineViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LibraryAngular.BLL.Services
{
    public class MagazineService
    {
        private MagazineRepository _magazineRepository;

        public MagazineService(MagazineRepository magazineRepository)
        {
            _magazineRepository = magazineRepository;
        }

        public async Task<GetAllMagazineViewModel> GetAll()
        {
            var result = new GetAllMagazineViewModel();
            IEnumerable<Magazine> magazinesList = await _magazineRepository.GetAll();
            var magazineVMItemList = Mapper.Map<IEnumerable<Magazine>, List<MagazineGetAllMagazineViewModelItem>>(magazinesList);
            result.Magazines = magazineVMItemList;
            return result;
        }

        public async Task<int> Create(CreateMagazineViewModel item)
        {
            var createdItem = Mapper.Map<CreateMagazineViewModel, Magazine>(item);
            int createdItemId = await _magazineRepository.Create(createdItem);
            return createdItemId;
        }

        public async Task Update(UpdateMagazineViewModel item)
        {
            var updatedItem = Mapper.Map<UpdateMagazineViewModel, Magazine>(item);
            await _magazineRepository.Update(updatedItem);
        }

        public async Task Delete(int id)
        {
            await _magazineRepository.Delete(id);
        }
    }
}
