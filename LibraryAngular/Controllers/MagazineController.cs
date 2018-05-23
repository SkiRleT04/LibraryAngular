using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryAngular.BLL.Services;
using LibraryAngular.ViewModels.MagazineViewModels;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAngular.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class MagazineController : Controller
  {
    private MagazineService _service;
    public MagazineController(MagazineService service)
    {
      _service = service;
    }


    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
      GetAllMagazineViewModel getAllMahazineViewModel = await _service.GetAll();
      return Ok(getAllMahazineViewModel);
    }


    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody]CreateMagazineViewModel itemVM)
    {
      if (itemVM == null)
      {
        return NotFound();
      }

      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      int newItemId = await _service.Create(itemVM);
      itemVM.Id = newItemId;
      return Ok(itemVM);
    }

    [HttpPost("update")]
    public async Task<IActionResult> Update([FromBody]UpdateMagazineViewModel itemVM)
    {
      if (itemVM == null)
      {
        return NotFound();
      }

      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      await _service.Update(itemVM);
      return Ok(itemVM);
    }

    [HttpPost("delete")]
    public async Task<IActionResult> Delete([FromBody]DeleteMagazineViewModel itemVM)
    {
      if (itemVM == null)
      {
        return NotFound();
      }
      await _service.Delete(itemVM.Id);
      return Ok(itemVM);
    }

  }
}
