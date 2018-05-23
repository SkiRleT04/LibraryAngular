using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using LibraryAngular.BLL.Services;
using LibraryAngular.ViewModels;
using LibraryAngular.ViewModels.AuthorViewModels;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAngular.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class AuthorController : Controller
  {
    private AuthorService _service;
    public AuthorController(AuthorService service)
    {
      _service = service;
    }


    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
      GetAllAuthorViewModel getAllAuthorViewModel = await _service.GetAll();
      return Ok(getAllAuthorViewModel);
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody]CreateAuthorViewModel itemVM)
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
    public async Task<IActionResult> Update([FromBody]UpdateAuthorViewModel itemVM)
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
    public async Task<IActionResult> Delete([FromBody]DeleteAuthorViewModel itemVM)
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
