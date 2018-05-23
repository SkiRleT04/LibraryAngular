using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryAngular.BLL.Services;
using LibraryAngular.ViewModels.AuthorViewModels;
using LibraryAngular.ViewModels.BookViewModels;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAngular.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class BookController : Controller
  {
    private BookService _service;
    public BookController(BookService service)
    {
      _service = service;
    }


    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
      GetAllBookViewModel getAllBookViewModel = await _service.GetAll();
      return Ok(getAllBookViewModel);
    }


    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody]CreateBookViewModel itemVM)
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
    public async Task<IActionResult> Update([FromBody]UpdateBookViewModel itemVM)
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
    public async Task<IActionResult> Delete([FromBody]DeleteBookViewModel itemVM)
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
