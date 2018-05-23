using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryAngular.BLL.Services;
using LibraryAngular.ViewModels.BrochureViewModels;
using LibraryAngular.ViewModels.LibraryViewModel;
using LibraryAngular.ViewModels.MagazineViewModels;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAngular.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class CommonLibraryController : Controller
  {
    private CommonLibraryService _service;
    public CommonLibraryController(CommonLibraryService service)
    {
      _service = service;
    }


    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
      GetAllCommonLibraryViewModel getAllCommonLibraryVM = await _service.GetAll();
      return Ok(getAllCommonLibraryVM);
    }

  }
}
