using caterapp.Model;
using caterapp.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace caterapp.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        private IEventRepository _eventRepository;
        public EventController(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        [HttpGet("[action]")]
        public IActionResult List()
        {
            return Json(_eventRepository.List());
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody] Event model)
        {
            if (model.Id == 0)
                _eventRepository.Save(model);
            else
                _eventRepository.Update(model);
            return Ok(model);
        }

        [HttpGet("[action]/{id}")]
        public IActionResult Get(int id)
        {
            var result = _eventRepository.Get(id);

            if (result == null)
                return NotFound();

            return Json(result);
        }

    }
}
