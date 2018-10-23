using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using caterapp.Model;
using caterapp.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace caterapp.Controllers
{
    [Route("api/event-type")]
    public class EventTypeController : Controller
    {
        private IEventTypeRepository _eventTypeRepo;

        public EventTypeController(IEventTypeRepository eventTypeRepo)
        {
            this._eventTypeRepo = eventTypeRepo;
        }

        [HttpGet("")]
        public IActionResult List()
        {
            return Json(_eventTypeRepo.List());
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody] EventType eventType)
        {
            _eventTypeRepo.Create(eventType);
            return Ok();
        }

        [HttpPost("[action]")]
        public IActionResult Update([FromBody] EventType eventType)
        {
            try
            {
                _eventTypeRepo.Update(eventType);
                return Ok();
            }
            catch (ArgumentException)
            {
                return NotFound();
            } 
            catch(Exception)
            {
                return StatusCode(500, "Server problem encountered");
            }
            
        }
    }
}