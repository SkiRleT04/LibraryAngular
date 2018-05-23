using AutoMapper;
using LibraryAngular.DAL.Repositories;
using LibraryAngular.Entities;
using LibraryAngular.ViewModels.LibraryViewModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LibraryAngular.BLL.Services
{
    public class CommonLibraryService
    {
        private CommonLibraryRepository _commonLibraryRepository;

        public CommonLibraryService(CommonLibraryRepository commonLibraryRepository)
        {
            _commonLibraryRepository = commonLibraryRepository;
        }

        public async Task<GetAllCommonLibraryViewModel> GetAll()
        {
            var result = new GetAllCommonLibraryViewModel();

            IEnumerable<CommonLibrary> commonsList = await _commonLibraryRepository.GetAll();
            var commonsVMItemList = Mapper.Map<IEnumerable<CommonLibrary>, List<CommonLibraryGetAllCommonLibraryViewModelItem>>(commonsList);
            result.Сommons = commonsVMItemList;
            return result;
        }
    }
}
