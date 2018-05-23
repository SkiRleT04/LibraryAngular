using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryAngular.BLL.Services;
using LibraryAngular.ViewModels.BrochureViewModels;
using LibraryAngular.ViewModels.MagazineViewModels;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAngular.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class BrochureController : Controller
  {
    private BrochureService _service;
    public BrochureController(BrochureService service)
    {
      _service = service;
    }


    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
      GetAllBrochureViewModel getAllBrochureViewModel = await _service.GetAll();
      return Ok(getAllBrochureViewModel);
    }


    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody]CreateBrochureViewModel itemVM)
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
    public async Task<IActionResult> Update([FromBody]UpdateBrochureViewModel itemVM)
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
