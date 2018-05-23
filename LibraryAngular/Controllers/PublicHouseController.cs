using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryAngular.BLL.Services;
using LibraryAngular.ViewModels.PublicHouseViewModels;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAngular.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class PublicHouseController : Controller
  {
    private PublicHouseService _service;
    public PublicHouseController(PublicHouseService service)
    {
      _service = service;
    }


    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
      GetAllPublicHouseViewModel getAllPublicHouseViewModel = await _service.GetAll();
      return Ok(getAllPublicHouseViewModel);
    }


    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody]CreatePublicHouseViewModel itemVM)
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
    public async Task<IActionResult> Update([FromBody]UpdatePublicHouseViewModel itemVM)
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
    public async Task<IActionResult> Delete([FromBody]DeletePublicHouseViewModel itemVM)
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
