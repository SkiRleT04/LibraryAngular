using AutoMapper;
using LibraryAngular.DAL.Repositories;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.BrochureViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LibraryAngular.BLL.Services
{
    public class BrochureService
    {
        private BrochureRepository _brochureRepository;

        public BrochureService (BrochureRepository brochureRepository)
        {
            _brochureRepository = brochureRepository;
        }

        public async Task<GetAllBrochureViewModel> GetAll()
        {
            var result = new GetAllBrochureViewModel();
            IEnumerable<Brochure> brochuresList = await _brochureRepository.GetAll();
            var brochureVMItemList = Mapper.Map<IEnumerable<Brochure>, List<BrochureGetAllBrochureViewModelItem>>(brochuresList);
            result.Brochures = brochureVMItemList;
            return result;
        }

        public async Task<int> Create(CreateBrochureViewModel item)
        {
            var createdItem = Mapper.Map<CreateBrochureViewModel, Brochure>(item);
            int createdItemId = await _brochureRepository.Create(createdItem);
            return createdItemId;
        }

        public async Task Update(UpdateBrochureViewModel item)
        {
            var updatedItem = Mapper.Map<UpdateBrochureViewModel, Brochure>(item);
            await _brochureRepository.Update(updatedItem);
        }

        public async Task Delete(int id)
        {
            await _brochureRepository.Delete(id);
        }
    }
}
